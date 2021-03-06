const conn = require('./connection.js')
const nanoid = require('nanoid')

// data usaha

var usaha_tersimpan_function = {
  simpanUsaha: (obj, response) => {
    conn.query('INSERT INTO usaha_tersimpan (id_usaha_tersimpan, id_usaha, id_pengguna, id_wilayah, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)',
    [nanoid.nanoid(10), obj.id_usaha, obj.id_pengguna, obj.id_wilayah, obj.latitude, obj.longitude],
    (err, results, fields) => {
      if(err) {
        console.log(err)
      } else {
        response(results, fields)
      }
    }
    
  )},

  ambilUsahaTersimpan: (id_pengguna, response) => {
    conn.query(`SELECT * FROM usaha_tersimpan join usaha on usaha_tersimpan.id_usaha = usaha.id_usaha where id_pengguna = "${id_pengguna}"`, (err, results) => {
      if(err) throw err
      response(results)
    })
  }, 
  ambilSatuUsahaTersimpan: (id_usaha_tersimpan, response) => {
    conn.query(`SELECT * FROM usaha_tersimpan join usaha on usaha_tersimpan.id_usaha = usaha.id_usaha where id_usaha_tersimpan = "${id_usaha_tersimpan}"`, (err, results) => {
      if(err) throw err
      response(results)
    })
  },

  hapusUsahaTersimpan: (id_usaha_tersimpan, response) => {
    conn.query(`DELETE FROM usaha_tersimpan where id_usaha_tersimpan = "${id_usaha_tersimpan}"`, (err, results) => {
      if(err) throw err
      response(results)
    })
  },
  hapusUsahaTersimpanByUser: (obj, response) => {
    conn.query(`DELETE FROM usaha_tersimpan where id_usaha ="${obj.id_usaha}" AND id_pengguna = "${obj.id_pengguna}" AND latitude = "${obj.latitude}" AND longitude = "${obj.longitude}"`, (err, results) => {
      if(err) throw err
      response(results)
    })
  },

  cekUsahaTersimpan: (obj, result) => {
    conn.query(`SELECT * FROM usaha_tersimpan where id_usaha = "${obj.id_usaha}" and latitude = "${obj.latitude}" and longitude = "${obj.longitude}" and id_pengguna ="${obj.id_pengguna}"`, (err, data) => {
      if(err) throw err
      result(data)
    })
  }
}

module.exports = usaha_tersimpan_function