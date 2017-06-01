# One-page

## Pitch 

Vous partez d'une page HTML déjà construite (http://bruxellesformationcepegra.github.io/lab-js-onepage) qui est inspirée de la page de présentation du plug-in Smint: http://www.outyear.co.uk/smint/

Le but est de réimplementer vous-même ce que ce plugin propose à savoir: sticky menu, scroll spy et smooth scroll.

## Tâches à effectuer

### Sticky menu

La navigation doit passer en position fixe dès que le scroll arrive à son niveau. Elle doit se remettre dans le flux quand le scroll revient *avant* sa position originale. 
Attention, quand cette navigation va sortir du flux, la page va changer de hauteur, ce qui risque d'avoir un effet de bord visuel désagréable... et à corriger ! 

A utiliser: `$(window).scroll()`, `$(window).scrollTop()` et `.offset().top`

### Smooth scroll

Le click sur un lien de la barre de navigation doit faire défiler la page jusqu'à la section liée au lien.

A utiliser: 

```javascript

$("html, body").animate({
		scrollTop: ET_ICI_JE_VOUS_LAISSE_CHERCHER
},1000);
    
```

### Scroll spy

Au scroll dans la page, il faut sélectionner dans la navigation le lien correspondant à la section "dans laquelle on se trouve"

A utiliser: `$(window).scroll()`, `$(window).scrollTop()`, `.offset().top` et un sélecteur qui permet de récupérer un élément à partir de la valeur d'un de ses attributs - j'en ai trop dit !

## Veillez à

- Performance et "mise en cache" d'éléments du DOM
- Réutilisation / généralisation de code autant que possible

## Si vous voulez aller + loin

Renseigner vous sur le *throttling* et le *debounce* qui permettent d'améliorer la performance d'actions menées au scroll ou au resize de fenêtre

[Debounce and Throttle: a visual explanation](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)

[Fonctions throttle et debounce de Underscore.js](http://underscorejs.org/#throttle)

**Happy scrolling !**