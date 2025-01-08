const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();

const cors = require('cors')
app.use(
  cors({
    origin: ["http://localhost:3000","https://dua-ruqyah-ashen.vercel.app"],
  })
);

const PORT = process.env.PORT || 5000;

// Connect to the SQLite database
const dbPath = path.resolve('dua_main.sqlite'); 
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Route: Fetch all categories with their subcategories
app.get('/api/categories', (req, res) => {
  const query = `
    SELECT 
      c.cat_id AS category_id, 
      c.cat_name_en AS category_name, 
      c.cat_icon,
      c.no_of_subcat,
      c.no_of_dua,
      sc.subcat_id AS subcategory_id, 
      sc.subcat_name_en AS subcategory_name,
      d.dua_id, 
      d.dua_name_en AS dua_name
    FROM 
      category AS c
    LEFT JOIN 
      sub_category AS sc ON c.cat_id = sc.cat_id
    LEFT JOIN 
      dua AS d ON sc.subcat_id = d.subcat_id AND c.cat_id = d.cat_id
    ORDER BY c.cat_id, sc.subcat_id, d.dua_id;
  `;

  db.all(query, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error', details: err.message });
    }

    // Group categories, subcategories, and duas into the desired structure
    const categories = {};

    rows.forEach(row => {
      const {
        category_id, category_name, cat_icon, no_of_subcat, no_of_dua,
        subcategory_id, subcategory_name, dua_id, dua_name
      } = row;

      // Initialize category if it doesn't exist
      if (!categories[category_id]) {
        categories[category_id] = {
          id: category_id,
          name: category_name,
          icon: cat_icon,
          no_of_subcat: no_of_subcat,
          no_of_dua: no_of_dua,
          subcategories: []
        };
      }

      // Initialize subcategory if it doesn't exist
      const category = categories[category_id];
      let subcategory = category.subcategories.find(subcat => subcat.id === subcategory_id);

      if (!subcategory) {
        subcategory = {
          id: subcategory_id,
          name: subcategory_name,
          duas: []
        };
        category.subcategories.push(subcategory);
      }

      // Add dua to the subcategory
      if (dua_id) {
        subcategory.duas.push({
          id: dua_id,
          name: dua_name
        });
      }
    });

    // Convert object to array and return the response
    res.status(200).json(Object.values(categories)); 
  });
});


app.get('/api/duas/:cat_id', (req, res) => {
  const { cat_id } = req.params;

  const query = `
    SELECT 
      sc.subcat_id AS subcategory_id, 
      sc.subcat_name_en AS subcategory_name,
      d.dua_id, 
      d.dua_name_en, 
      d.top_en, 
      d.dua_arabic, 
      d.translation_en, 
      d.transliteration_en, 
      d.bottom_en, 
      d.refference_en, 
      d.audio
    FROM 
      sub_category AS sc
    LEFT JOIN 
      dua AS d ON sc.subcat_id = d.subcat_id
    WHERE 
      sc.cat_id = ?
    ORDER BY 
      sc.subcat_id, d.dua_id;
  `;

  db.all(query, [cat_id], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error', details: err.message });
    }

    // Process rows to group duas under their respective subcategories
    const subcategories = {};

    rows.forEach(row => {
      const {
        subcategory_id,
        subcategory_name,
        dua_id,
        dua_name_en,
        top_en,
        dua_arabic,
        translation_en,
        transliteration_en,
        bottom_en,
        refference_en,
        audio,
      } = row;

      // Initialize subcategory if it doesn't exist
      if (!subcategories[subcategory_id]) {
        subcategories[subcategory_id] = {
          id: subcategory_id,
          name: subcategory_name,
          duas: [],
        };
      }

      // Add dua to the subcategory
      if (dua_id) {
        subcategories[subcategory_id].duas.push({
          id: dua_id,
          name: dua_name_en,
          top_en,
          dua_arabic,
          translation_en,
          transliteration_en,
          bottom_en,
          refference_en,
          audio,
        });
      }
    });

    // Convert the subcategories object to an array and send as response
    res.status(200).json(Object.values(subcategories));
  });
});






// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
