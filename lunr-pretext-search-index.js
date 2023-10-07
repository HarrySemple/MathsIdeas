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
  "body": " More Uses of the Guassian Integral   The Gamma Function is given by:          It follows from the definition of the Gamma Function that     "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "guass.html#definition-1",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": " The Gamma Function is given by:   "
},
{
  "id": "claim-1",
  "level": "2",
  "url": "guass.html#claim-1",
  "type": "Claim",
  "number": "1.3.2",
  "title": "",
  "body": "    "
},
{
  "id": "proof-1",
  "level": "2",
  "url": "guass.html#proof-1",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " It follows from the definition of the Gamma Function that   "
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
  "id": "sec-eig",
  "level": "1",
  "url": "sec-eig.html",
  "type": "Section",
  "number": "3.1",
  "title": "Eigenvalues and Eigenvectors",
  "body": " Eigenvalues and Eigenvectors    Given a matrix ,     "
},
{
  "id": "def-eigenvalue",
  "level": "2",
  "url": "sec-eig.html#def-eigenvalue",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  Given a matrix ,    "
},
{
  "id": "sec-Eigenfunctions",
  "level": "1",
  "url": "sec-Eigenfunctions.html",
  "type": "Section",
  "number": "3.2",
  "title": "**Eigenfunctions",
  "body": " **Eigenfunctions  "
},
{
  "id": "key-results",
  "level": "1",
  "url": "key-results.html",
  "type": "Section",
  "number": "4.1",
  "title": "**Key Results",
  "body": " **Key Results  "
},
{
  "id": "math-bio-1",
  "level": "1",
  "url": "math-bio-1.html",
  "type": "Section",
  "number": "4.2",
  "title": "Uses In Mathematical Biology",
  "body": " Uses In Mathematical Biology   Derivation of the Conservation Equation  Consider the conservation of particles in an arbitrary volume , enclosed by a surface , within a smooth domain . By the law of conservation, we have that: Now set By , we have Applying the divergence theorem and rearranging gives us As is an arbitrary volume within , we have that the integrand itself is zero. In addition, is arbitrary and is now sent to zero, giving us: The Conservation Equation.    Advective and Diffusive Flux  In the context of biological models, we can often split into two components: Where Thus, the Advection-Diffusion Equation is given by:    Taxis Terms for the Flux  Now we model movement in response to an external cue - such as light, tempreture, chemicals or another population. This results in an advective flux specified by: Where concentration of the external cue.    "
},
{
  "id": "theory-pdes",
  "level": "1",
  "url": "theory-pdes.html",
  "type": "Section",
  "number": "4.3",
  "title": "**Theory of PDE’s",
  "body": " **Theory of PDE's  "
},
{
  "id": "num-pdes",
  "level": "1",
  "url": "num-pdes.html",
  "type": "Section",
  "number": "4.4",
  "title": "**Numerical Solutions of Elliptic PDE’s",
  "body": " **Numerical Solutions of Elliptic PDE's  "
},
{
  "id": "sec-ml-intro",
  "level": "1",
  "url": "sec-ml-intro.html",
  "type": "Section",
  "number": "5.1",
  "title": "Introduction",
  "body": " Introduction    A common activation function is the sigmoid function, given by for .  In future, this will be applied to vectors component-wise. That is, for  .     It can be easily checked that    Now we set up layers of neurons. Each neuron computes a single real number and passes it to every neuron in the next layer. In turn, each new neuron performs its own weighted combination of these values, adds its own bias and applies the sigmoid function. This is illustrated by  Where and .   The next neuron outputs     General Setup  'Deep learning' refers to the use of hidden layers between the input and output layers. For a network of layers, are the respective input, output layers. Each layer contains neurons. Thus, the netwrok maps . Where For training datapoints,    "
},
{
  "id": "def-sigmoid",
  "level": "2",
  "url": "sec-ml-intro.html#def-sigmoid",
  "type": "Definition",
  "number": "5.1.1",
  "title": "",
  "body": "  A common activation function is the sigmoid function, given by for .  In future, this will be applied to vectors component-wise. That is, for  .   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-ml-intro.html#remark-1",
  "type": "Remark",
  "number": "5.1.2",
  "title": "",
  "body": " It can be easily checked that   "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-ml-intro.html#remark-2",
  "type": "Remark",
  "number": "5.1.3",
  "title": "",
  "body": " The next neuron outputs   "
},
{
  "id": "sec-stochastic",
  "level": "1",
  "url": "sec-stochastic.html",
  "type": "Section",
  "number": "5.2",
  "title": "Stochastic Gradient",
  "body": " Stochastic Gradient  Building a network corresponds to choosing parameters (of and ) that minimise the the cost function. Taking to be the number of parameters, we store these variables in a single vector .  By a taylor series expansion, we have Which motivates us to make as negative as possible. Cauchy-Schwarz tells us that , so this happens when . Thus, we choose and update accoringly: Iterating this update forms the basis of gradient descent, with as the learning rate.   Computing is expensive. It is formulated as: Where     Stochastic Gradient        "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-stochastic.html#remark-3",
  "type": "Remark",
  "number": "5.2.1",
  "title": "",
  "body": " Computing is expensive. It is formulated as: Where   "
},
{
  "id": "alg-sto-grad",
  "level": "2",
  "url": "sec-stochastic.html#alg-sto-grad",
  "type": "Algorithm",
  "number": "5.2.2",
  "title": "Stochastic Gradient.",
  "body": " Stochastic Gradient       "
},
{
  "id": "sec-auto-diff",
  "level": "1",
  "url": "sec-auto-diff.html",
  "type": "Section",
  "number": "5.3",
  "title": "Automatic Differentiation",
  "body": " Automatic Differentiation  Now we focus on computing partials of the cost function. We fix and treat as a function of weights and biases.         Thus, and is thought of as the weighed input of neuron in layer     We have the following results:     "
},
{
  "id": "def-ad1",
  "level": "2",
  "url": "sec-auto-diff.html#def-ad1",
  "type": "Definition",
  "number": "5.3.1",
  "title": "",
  "body": "      "
},
{
  "id": "lem-ad2",
  "level": "2",
  "url": "sec-auto-diff.html#lem-ad2",
  "type": "Lemma",
  "number": "5.3.2",
  "title": "",
  "body": "  We have the following results:    "
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
