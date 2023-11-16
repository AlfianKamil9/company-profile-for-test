const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    layout: 'partials/main-layout',
    title: 'Homepage | Paralax Express',
  });
});
router.get('/profile', (req, res) => {
  res.render('profile', {
    layout: 'partials/main-layout',
    title: 'Profile | Paralax Express',
  });
});

router.get('/aboutme', (req, res) => {
  res.render('aboutme', {
    layout: 'partials/main-layout',
    title: 'Tentang Kami | Paralax Express',
  });
});

router.get('/visimisi', (req, res) => {
  res.render('visimisi', {
    layout: 'partials/main-layout',
    title: 'Visi & Misi | Paralax Express ',
  });
});

router.get('/contactme', (req, res) => {
  res.render('contactme', {
    layout: 'partials/main-layout',
    title: 'Kontak Kami | Paralax Express ',
  });
});

router.get('/galery-foto', (req, res) => {
  res.render('galery', {
    layout: 'partials/main-layout',
    title: 'Galery Foto | Paralax Express ',
  });
});

router.get('/artikel', (req, res) => {
  res.render('artikel', {
    layout: 'partials/main-layout',
    title: 'Artikel | Paralax Express ',
  });
});

router.get('/produk', (req, res) => {
  res.render('produk', {
    layout: 'partials/main-layout',
    title: 'Produk | Paralax Express ',
  });
});

router.get('/event', (req, res) => {
  res.render('event', {
    layout: 'partials/main-layout',
    title: 'Event | Paralax Express ',
  });
});

module.exports = router;
