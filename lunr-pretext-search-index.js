var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " I am an MMath student at the University of Bath interested in PDE's, Machine Learning, Mathematical Biology and Scientific Computing. This webpage is dedicated to satisfying results I've come across - both in and outside my degree.  As of August 2023, much of this is still to be typeset; most topics have scanned placeholders until I get good at PreTeXt.   Website author with a german swan    "
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
  "title": "**Interpolation Rules",
  "body": " **Interpolation Rules  "
},
{
  "id": "normal-2",
  "level": "1",
  "url": "normal-2.html",
  "type": "Section",
  "number": "2.2",
  "title": "**Estimating The Normal Distribution",
  "body": " **Estimating The Normal Distribution  "
},
{
  "id": "key-results",
  "level": "1",
  "url": "key-results.html",
  "type": "Section",
  "number": "3.1",
  "title": "**Key Results",
  "body": " **Key Results  "
},
{
  "id": "math-bio-1",
  "level": "1",
  "url": "math-bio-1.html",
  "type": "Section",
  "number": "3.2",
  "title": "**Uses In Mathematical Biology",
  "body": " **Uses In Mathematical Biology   Derivation of the Conservation Equation  Consider the conservation of particles in an arbitrary volume , enclosed by a surface , within a smooth domain . By the law of conservation, we have that: Now set By (1), we have Applying the divergence theorem and rearranging gives us As is an arbitrary volume within , we have that the integrand itself is zero. In addition, is arbitrary and is now sent to zero, giving us: The Conservation Equation.    Advective and Diffusive Flux  In the context of biological models, we can often split into two components: Where Thus, the Advection-Diffusion Equation is given by:    Taxis Terms for the Flux  Now we model movement in response to an external cue - such as light, tempreture, chemicals or another population. This results in an advective flux specified by: Where concentration of the external cue.    "
},
{
  "id": "sec-ml",
  "level": "1",
  "url": "sec-ml.html",
  "type": "Section",
  "number": "3.3",
  "title": "Deep Learning",
  "body": " Deep Learning  "
},
{
  "id": "theory-pdes",
  "level": "1",
  "url": "theory-pdes.html",
  "type": "Section",
  "number": "3.4",
  "title": "**Theory of PDE’s",
  "body": " **Theory of PDE's  "
},
{
  "id": "num-pdes",
  "level": "1",
  "url": "num-pdes.html",
  "type": "Section",
  "number": "3.5",
  "title": "**Numerical Solutions of PDE’s",
  "body": " **Numerical Solutions of PDE's  "
},
{
  "id": "subsec-Natural-Logorithm",
  "level": "1",
  "url": "subsec-Natural-Logorithm.html",
  "type": "Subsection",
  "number": "1.1",
  "title": "Natural Logorithm",
  "body": " Natural Logorithm    "
},
{
  "id": "subsec-Irrational-Indices",
  "level": "1",
  "url": "subsec-Irrational-Indices.html",
  "type": "Subsection",
  "number": "1.2",
  "title": "Irrational Indices",
  "body": " Irrational Indices    "
},
{
  "id": "subsec-Fourier-Series",
  "level": "1",
  "url": "subsec-Fourier-Series.html",
  "type": "Subsection",
  "number": "1.3",
  "title": "Fourier Series",
  "body": " Fourier Series          "
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
