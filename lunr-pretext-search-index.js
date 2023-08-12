var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " I am an MMath student at the University of Bath interested in PDE's, Machine Learning, Mathematical Biology and Scientific Computing. This webpage is dedicated to satisfying results I've come across - both in and outside of my degree.  As of August 2023, much of this is still to be typeset and most topics have scanned placeholders until I get good at PreTeXt.   Website author with a german swan    "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "preface-1.html#figure-1",
  "type": "Figure",
  "number": "0.0.1",
  "title": "",
  "body": " Website author with a german swan   "
},
{
  "id": "arc-length",
  "level": "1",
  "url": "arc-length.html",
  "type": "Section",
  "number": "1.1",
  "title": "Arc Length",
  "body": " Arc Length    "
},
{
  "id": "normal-1",
  "level": "1",
  "url": "normal-1.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Normal Distribution",
  "body": " The Normal Distribution          "
},
{
  "id": "guass",
  "level": "1",
  "url": "guass.html",
  "type": "Section",
  "number": "1.3",
  "title": "More Uses of the Guassian Integral",
  "body": " More Uses of the Guassian Integral    "
},
{
  "id": "special-1",
  "level": "1",
  "url": "special-1.html",
  "type": "Section",
  "number": "1.4",
  "title": "Special Relativity",
  "body": " Special Relativity    "
},
{
  "id": "interpolation",
  "level": "1",
  "url": "interpolation.html",
  "type": "Section",
  "number": "2.1",
  "title": "Interpolation Rules",
  "body": " Interpolation Rules  Hello  "
},
{
  "id": "normal-2",
  "level": "1",
  "url": "normal-2.html",
  "type": "Section",
  "number": "2.2",
  "title": "Estimating The Normal Distribution",
  "body": " Estimating The Normal Distribution  Hello  "
},
{
  "id": "key-results",
  "level": "1",
  "url": "key-results.html",
  "type": "Section",
  "number": "3.1",
  "title": "Key Results",
  "body": " Key Results  Hello  "
},
{
  "id": "math-bio-1",
  "level": "1",
  "url": "math-bio-1.html",
  "type": "Section",
  "number": "3.2",
  "title": "Uses In Mathematical Biology",
  "body": " Uses In Mathematical Biology  Hello  "
},
{
  "id": "theory-pdes",
  "level": "1",
  "url": "theory-pdes.html",
  "type": "Section",
  "number": "3.3",
  "title": "Theory of PDE’s",
  "body": " Theory of PDE's  Hello  "
},
{
  "id": "num-pdes",
  "level": "1",
  "url": "num-pdes.html",
  "type": "Section",
  "number": "3.4",
  "title": "Numerical Solutions of PDE’s",
  "body": " Numerical Solutions of PDE's  Hello  "
},
{
  "id": "misc-1",
  "level": "1",
  "url": "misc-1.html",
  "type": "Section",
  "number": "1",
  "title": "Miscellaneous",
  "body": " Miscellaneous      "
},
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  copyright  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
