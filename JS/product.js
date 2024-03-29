


// ---------------------------------------------------------  AJOUT DES STYLES CSS

// ---------------------------- Pour pouvoir créer les élements tel que le Header, il faut d'abord récupérer le seul élément présent dans le HTML, à savoir le body.

let body = document.querySelector("body");

// ------------------------------------------------------------ HEADER

let header = document.createElement("header");
body.appendChild(header);

let headerBackGround = document.createElement("div");
header.appendChild(headerBackGround);
headerBackGround.setAttribute("class", "bg-dark");

let headerContainer = document.createElement("div");
headerBackGround.appendChild(headerContainer);
headerContainer.setAttribute("class", "container");

let headerRow = document.createElement("div");
headerContainer.appendChild(headerRow);
headerRow.setAttribute("class", "row");

//-------------------------------------------------------------- HEADER NAV

let nav = document.createElement("nav");
headerRow.appendChild(nav);
nav.setAttribute("class", "col navbar navbar-expand-lg navbar-dark");

let navAnchor = document.createElement("a");
nav.appendChild(navAnchor);
navAnchor.setAttribute("class", "navbar-brand");
navAnchor.href = "index.html";

let logo = document.createElement("img");
navAnchor.appendChild(logo);
logo.src = "img/logo.png";
logo.style.width = "100px";
logo.style.height = "50px";
logo.alt = "Logo Orinoco";

//---------------------------------------------------------- BOUTON MENU DEROULANT POUR RESPONSIVE

let navBouton = document.createElement("button");
nav.appendChild(navBouton);
navBouton.setAttribute("class", "navbar-toggler");
navBouton.setAttribute("type", "button");
navBouton.setAttribute("data-toggle", "collapse");
navBouton.setAttribute("data-target", "#navbarContent");
navBouton.setAttribute("aria-controls", "navbarSupportedContent");
navBouton.setAttribute("aria-expanded", "false");
navBouton.setAttribute("aria-label", "Toggle navigation");

let spanButon = document.createElement("span");
navBouton.appendChild(spanButon);
spanButon.setAttribute("class", "navbar-toggler-icon");

let navBarContent = document.createElement("div");
nav.appendChild(navBarContent);
navBarContent.setAttribute("id", "navbarContent");
navBarContent.setAttribute("class", "collapse navbar-collapse");

let listeNav = document.createElement("ul");
navBarContent.appendChild(listeNav);
listeNav.setAttribute("class", "navbar-nav");

let itemActiv = document.createElement("li");
listeNav.appendChild(itemActiv);
itemActiv.setAttribute("class", "nav-item active");

let itemActivAnchor = document.createElement("a");
itemActiv.appendChild(itemActivAnchor);
itemActivAnchor.setAttribute("class", "nav-link");
itemActivAnchor.href = "index.html";
itemActivAnchor.textContent = "Nos Orinocours";

let otherItem = document.createElement("li");
listeNav.appendChild(otherItem);
otherItem.setAttribute("class", "nav-item");

let otherItemAnchor = document.createElement("a");
otherItem.appendChild(otherItemAnchor);
otherItemAnchor.textContent = "Les plus populaires";
otherItemAnchor.href = "#";
otherItemAnchor.setAttribute("class", "nav-link");

let otherItem2 = document.createElement("li");
listeNav.appendChild(otherItem2);
otherItem2.setAttribute("class", "nav-item");

let otherItemAnchor2 = document.createElement("a");
otherItem2.appendChild(otherItemAnchor2);
otherItemAnchor2.textContent = "Mon panier";
otherItemAnchor2.href = "basket.html";
otherItemAnchor2.setAttribute("class", "nav-link");
otherItemAnchor2.href = "basket.html";

// ------------------------------------------------------ LOGO PANIER HEADER

let logoPanier = document.createElement("i");
logoPanier.setAttribute("class", "fas fa-shopping-cart ");
logoPanier.style.color = "white";
otherItemAnchor2.appendChild(logoPanier);
logoPanier.style.marginLeft = "4px";

let articleDansPanier = document.createElement("span");
logoPanier.appendChild(articleDansPanier);
articleDansPanier.setAttribute("id", "cardcount");
articleDansPanier.style.marginLeft = "4px";


// ------------------------------------- Si un produit a été mis dans le panier, il faut récupérer la valeur nb article pour l'actualiser

let totalArticle = localStorage.getItem('Total Article');

if (totalArticle == null){
  totalArticle == 0
}else{
  articleDansPanier.textContent = totalArticle;
}


// --------------------------------------------------------------------- CREATION DU MAIN

let main = document.createElement("main");
body.appendChild(main);
main.setAttribute("id", "main");
main.setAttribute("class", "container ");
main.style.marginTop = "7%"
let conteneurProduit = document.createElement("div");
conteneurProduit.setAttribute("class", "row");
conteneurProduit.setAttribute("id", "#id");
conteneurProduit.style.display = "flex";
conteneurProduit.style.flexWrap = "wrap";
// conteneurProduit.style.justifyContent = "space-around"
main.appendChild(conteneurProduit);
main.style.minHeight = "620px"

// -------------------------------------------------------------- FOOTER

let footer = document.createElement("footer");
body.appendChild(footer);
footer.setAttribute("class", "col py-5 bg-dark");

let containerFooter = document.createElement("div");
containerFooter.setAttribute("class", "container");
footer.appendChild(containerFooter);

let pFooter = document.createElement("p");
containerFooter.appendChild(pFooter);
pFooter.setAttribute("class", "m-0 text-center text-white");
pFooter.textContent = "Copyright By Chikibraaaaaah 2021";












































//------------------------------------------------------- AUTOMATISATION DE LA RECUPERATION DES INFOS LIEES AU TEDDY


// ----------------------------On veut que le produit cliqué charge automatiquement ses informations nécessaires. (name, prix, photo...)
// --------------Appel du produit

// async function appelDesProduits (){
//   let response = await fetch("http://localhost:3000/api/teddies");
//   let responseJson = await response.json();

//   try {
//     for (var i = 0; i < responseJson.length; i++) {
//       let teddy = responseJson[i];
//       let teddyName = teddy.name;
//       let teddyId = teddy._id;
//       let teddyPrice = teddy.price / 100;
//       let teddyColor = teddy.colors;
//       let teddyImg = teddy.imageUrl;
      

//       // Information reçues mises dans le SESSION storage

//       // localStorage.setItem(teddyName, JSON.stringify(teddy));
//       // localStorage.getItem(teddyName);

//       // ----------------- Maintenant que les infos sont dans le storage, on va décomposer l'URL pour récupérer l'Id du produit, et faire appraitre le produit ayant la même

//       const adresseActuelle = window.location.href.split("=");
//       // console.log(adresseActuelle);

//       const idDansUrl = adresseActuelle[1];
//       //  console.log(idDansUrl)

//       // --------------------------------  si l'id de l'url == id product dans session storage alors charger les infos correspondantes

//       if (idDansUrl == teddyId) {
//         // ---------------------------------------------- Construction de la structure HTML de la page

//         const conteneurProduit = document.createElement("div");
//         main.appendChild(conteneurProduit);
//         conteneurProduit.setAttribute("class", "row");

//         const article = document.createElement("figure");
//         conteneurProduit.appendChild(article);
//         article.setAttribute("class", "row");

//         // -----------------------------------------------   Chargement de la photo correspondate au produit appelé

//         const apercuArticle = document.createElement("img");
//         article.appendChild(apercuArticle);
//         apercuArticle.src = teddy.imageUrl;
//         apercuArticle.setAttribute("class", "col col-xl-6 card-image-top");

//         // ------------------------------------  Chargement des infos relatives au produit. Si la description est la même pour tous, le prix et le nom varient

//         const infosArticle = document.createElement("figcaption");
//         article.appendChild(infosArticle);
//         infosArticle.setAttribute("class", "col col-xl-6 card-body border");
        

//         const nomArticle = document.createElement("h2");
//         infosArticle.appendChild(nomArticle);
//         nomArticle.setAttribute("class", "card-title");
//         nomArticle.textContent = teddyName;

//         var prixArticle = document.createElement("p");
//         infosArticle.appendChild(prixArticle);
//         prixArticle.textContent = teddyPrice + " €";

//         const descriptionArticle = document.createElement("p");
//         infosArticle.appendChild(descriptionArticle);
//         descriptionArticle.textContent = teddy.description;
//         descriptionArticle.setAttribute("class", "card-body ");

//         // ----------------------------------------------------- Gestion des quantités

//         let quantite = document.createElement("p");
//         infosArticle.appendChild(quantite);
//         quantite.textContent = "Quantité";

//         let inputQuantite = document.createElement("input");
//         quantite.appendChild(inputQuantite);
//         inputQuantite.style.marginLeft = "8px";
//         inputQuantite.style.width = "10%";
//         inputQuantite.setAttribute("type", "number");
//         inputQuantite.value = 1;
//         inputQuantite.min = 0;
//         inputQuantite.max = 15;

//         // ---------------------------------------- Ici nous avons un nombre de couleurs qui varie selon le produit.
//         // ------------------------------------- Création donc d'une fonction qui prendra en paramètre la couleur choisie

//         const couleur = document.createElement("p");
//         infosArticle.appendChild(couleur);
//         couleur.textContent = "Couleurs disponibles";

//         function choixCouleur(couleurChoisie) {
//           couleurChoisie = document.createElement("select");
//           couleurChoisie.setAttribute("id", "couleur");
//           couleurChoisie.style.marginLeft = "8px";

//           for (var i = 0; i < teddyColor.length; i++) {
//             var couleurPossible = document.createElement("option");
//             couleurPossible.setAttribute("id", "couleur");
//             couleurPossible.textContent = teddyColor[i];
//             couleur.appendChild(couleurChoisie);
//             couleurChoisie.appendChild(couleurPossible);
//           }
//         }

//         choixCouleur();

//         // -------------------------------------- Création d'un sous-total permettant de récapituler la commande en cours avant validation

//         let sousTotal = document.createElement("p");
//         infosArticle.appendChild(sousTotal);
//         sousTotal.textContent = "Sous-total :";

//         let montantSousTotal = document.createElement("input");
//         sousTotal.appendChild(montantSousTotal);
//         montantSousTotal.setAttribute("disabled", "disabled");
//         montantSousTotal.style.border = "none";
//         montantSousTotal.style.marginLeft = "4px";
//         montantSousTotal.value = teddyPrice ;
//         montantSousTotal.style.backgroundColor = "white";

//         // ----------------------------------------------------- Fonction qui va mettre à jour le sous total par rapport à quantité

//         inputQuantite.onchange = function () {
//           montantSousTotal.value =  parseInt(prixArticle.textContent) * inputQuantite.value ;
//         };

//         // -------------------------------------- Ne manque plus que les boutons d'ajout au panier et pour consulter le panier

//         let conteneurBoutons = document.createElement("div");
      
//         infosArticle.appendChild(conteneurBoutons);
//         conteneurBoutons.style.display = "flex";
//         conteneurBoutons.style.justifyContent = "space-around";

//         // --------------------------------------------------- Bouton d'ajout au panier

//         let boutonAjouterAuPanier = document.createElement("button");
//         conteneurBoutons.appendChild(boutonAjouterAuPanier);
//         boutonAjouterAuPanier.textContent = "Ajouter au panier";
//         boutonAjouterAuPanier.setAttribute("class", "btn btn-primary");
//         boutonAjouterAuPanier.setAttribute("type", "submit");

//         // -------------------------------------------------Création du lien vers la page panier

//         let anchorPanier = document.createElement("a");
//         conteneurBoutons.appendChild(anchorPanier);
//         anchorPanier.href = "basket.html";

//         let boutonVoirPanier = document.createElement("button");
//         anchorPanier.appendChild(boutonVoirPanier);
//         boutonVoirPanier.textContent = "Voir mon panier";
//         boutonVoirPanier.setAttribute("class", "btn btn-secondary");

//          boutonAjouterAuPanier.style.marginBottom = "12px";
//          let spanBtn = document.createElement("span");
//         //  spanBtn.setAttribute('class','col-')
//         spanBtn.style.marginLeft = "20%";
 
//          main.appendChild(spanBtn);

//          function validerArticle() {
//            spanBtn.animate(
//              [{ opacity: 0 }, { opacity: 0.9, offset: 0.7 }, { opacity: 1 }],
//              2500
//            );
//            spanBtn.style.opacity = 0;
//          }

        

//         // ------------------------------------ Ne reste plus qu'à pouvoir ajouter le produit au panier.
//         // ------------------------- Il faut donc créer la classe Teddy avec infos id, couleur, quantité et sous-total que nous stockerons dans 
//         //-------------------------------------------le storage pour les afficher dans le panier"

//         class Teddy {
//           constructor(teddyId, couleur, quantite, sousTotal, name, img ) {
//             this.teddyId = teddyId;
//             this.couleur = couleur;
//             this.quantite = quantite;
//             this.sousTotal = sousTotal;
//             this.name = name;
//             this.img = img;
//           }
//         }

//         // ----------------------------------------- Création de la fonction pour mettre dans le panier storage

//         // ------------------------------------ Au click, on va creer et envoyer en session storage les données reçues.

//         boutonAjouterAuPanier.onclick = function (teddyId, couleur, quantite, sousTotal, name, img) {
          
//           // On récupère l'id dans l'url créée pour aller chercher dans storages les autres infos relatives
//           teddyId = idDansUrl;
//           couleur = document.getElementById("couleur").value;
//           // console.log(couleur)
//           quantite = inputQuantite.value;
//           // console.log(inputQuantite.value);
//           sousTotal = montantSousTotal.value;
//           // console.log(montantSousTotal.value);
//           name = nomArticle.textContent;
//           img = teddyImg;
//           let teddyAchete = new Teddy(teddyId, couleur, quantite, sousTotal, name, img);
//           let contenuPanier = JSON.parse(localStorage.getItem("Mon Panier"));

//              function ajouterAuPanier(teddyAchete) {
//                contenuPanier.push(teddyAchete);
//                totalArticle =
//                  parseInt(totalArticle) + parseInt(teddyAchete.quantite);
//                montantTotal = montantTotal + parseInt(teddyAchete.sousTotal);
//              }

//              validerArticle();

//           // --------------------------------------- On définit le nombre d'article dans le panier pour itérer le logo de notre panier
//           let totalArticle = parseInt(localStorage.getItem('Total Article'));

//           // -------------------------------------------On définit le montant total pour pouvoir l'utiliser dans la page panier
//           let montantTotal = parseInt(localStorage.getItem("Montant Total"));

//           // -------------------------------------------Message de validation 
//           spanBtn.innerHTML = '<i class="fas fa-paw" id="papate"></i> L\'article a été mis dans le panier !'
//           let papate = document.getElementById('papate');
//           papate.style.color = "green"
      
//           //---------------------------------------------------- Premier cas de figure, le panier est vide

//           if (contenuPanier == null || contenuPanier.length == 0) {
//             contenuPanier = [];
//             totalArticle = 0;
//             montantTotal = 0;
//             ajouterAuPanier(teddyAchete);
            
//           }

//           //--------------------------------------------- Deuxième cas, le panier n'est pas vide.
//           else {
//             // ---------------------------------------le panier contient t-il le produit en question ?

//             for (var i in contenuPanier) {
//               var teddyDansPanier = contenuPanier[i];
//             }

//             // -------------------------Pour le savoir il faut comparer d'abord l'id. S'il n'est pas présent on ajoute le produit.
//             //---------------------------- Si l'id est présent, la couleur est-elle la même ? Si non, alors on ajoute le produit

//             if (
//               teddyAchete.teddyId !== teddyDansPanier.teddyId ||
//               (teddyAchete.teddyId == teddyDansPanier.teddyId &&
//                 teddyAchete.couleur !== teddyDansPanier.couleur)
//             ) {
//               ajouterAuPanier(teddyAchete);
//             } else if (
//               teddyAchete.teddyId == teddyDansPanier.teddyId &&
//               teddyAchete.couleur == teddyDansPanier.couleur
//             ) {
//               // -------------Le produit est déjà présent dans le panier. Dans ce cas, on incrémente simplement le sous-total et la quantité du produit concerné

//               function mettreAJourLePanier(quantite, sousTotal) {
//                 teddyDansPanier.quantite = parseInt(teddyDansPanier.quantite) + parseInt(teddyAchete.quantite);
//                 teddyDansPanier.sousTotal = parseInt(teddyDansPanier.sousTotal) + parseInt(teddyAchete.sousTotal);
//                 totalArticle = parseInt(totalArticle) + parseInt(teddyAchete.quantite);
//                 montantTotal = montantTotal + parseInt(teddyAchete.sousTotal);
//               }

//               mettreAJourLePanier(quantite, sousTotal);
//             }
//           }

//           localStorage.setItem("Mon Panier", JSON.stringify(contenuPanier));
//           localStorage.setItem("Total Article",parseInt(totalArticle));
//           localStorage.setItem("Montant Total", parseInt(montantTotal));

//           let panierHeader = document.getElementById("cardcount");
//           panierHeader.textContent = totalArticle;
//         };

//         // ------------------------------- Une fois les articles dans le panier, on veut incrémenter le panier du header.
//       }
//     }
//   } catch (e) {
//     let conteneurErreur = document.createElement("div");
//     conteneurErreur.setAttribute("class", "container");
//     main.appendChild(conteneurErreur);

//     let figureErreur = document.createElement("figure");
//     conteneurErreur.appendChild(figureErreur);
//     figureErreur.setAttribute("class", "col ");
//     figureErreur.style.display = "flex";
//     figureErreur.style.width = "50%";
//     figureErreur.style.margin = "auto";
//     figureErreur.style.marginTop = "2%";

//     let imageErreur = document.createElement("img");
//     figureErreur.appendChild(imageErreur);
//     imageErreur.src = "img/oubli_connexion.jpg";
//     imageErreur.style.width = "9rem";

//     let messageErreur = document.createElement("figcaption");
//     figureErreur.appendChild(messageErreur);
//     messageErreur.textContent = "Oups, tu as oublié de lancer Node";
//     messageErreur.style.margin = "auto ";
//     messageErreur.style.marginLeft = "1%";
//   }
// }
// appelDesProduits()



async function appelDuProduit(){
  try{
    let teddyId = window.location.search.split('=')[1];
    let response = await fetch(`http://localhost:3000/api/teddies/${teddyId}`);
    let teddy = await response.json();
    console.log(teddy)

    // ---------------------------------------------- Construction de la structure HTML de la page

    const conteneurProd = document.createElement('div');
    main.appendChild(conteneurProd);
 
  
    const article = document.createElement("figure");
    conteneurProduit.appendChild(article);
    article.setAttribute("class", "row");
  
  // -----------------------------------------------   Chargement de la photo correspondate au produit appelé

    const apercuArticle = document.createElement("img");
    article.appendChild(apercuArticle);
    apercuArticle.src = teddy.imageUrl;
    apercuArticle.setAttribute("class", "col col-xl-6 card-image-top");

    // ------------------------------------  Chargement des infos relatives au produit. Si la description est la même pour tous, le prix et le nom varient

    const infosArticle = document.createElement("figcaption");
    article.appendChild(infosArticle);
    infosArticle.setAttribute("class", "col col-xl-6 card-body border");

    const nomArticle = document.createElement("h2");
    infosArticle.appendChild(nomArticle);
    nomArticle.setAttribute("class", "card-title");
    nomArticle.textContent = teddy.name;

    var prixArticle = document.createElement("p");
    infosArticle.appendChild(prixArticle);
    prixArticle.textContent = teddy.price/100 + " €";

    const descriptionArticle = document.createElement("p");
    infosArticle.appendChild(descriptionArticle);
    descriptionArticle.textContent = teddy.description;
    descriptionArticle.setAttribute("class", "card-body ");
    
        // ----------------------------------------------------- Gestion des quantités
  
        let quantite = document.createElement("p");
        infosArticle.appendChild(quantite);
        quantite.textContent = "Quantité";

        let inputQuantite = document.createElement("input");
        quantite.appendChild(inputQuantite);
        inputQuantite.style.marginLeft = "8px";
        inputQuantite.style.width = "10%";
        inputQuantite.setAttribute("type", "number");
        inputQuantite.value = 1;
        inputQuantite.min = 0;
        inputQuantite.max = 15;
     // ---------------------------------------- Ici nous avons un nombre de couleurs qui varie selon le produit.
     // ------------------------------------- Création donc d'une fonction qui prendra en paramètre la couleur choisie

       const couleur = document.createElement("p");
       infosArticle.appendChild(couleur);
       couleur.textContent = "Couleurs disponibles";

       function choixCouleur(couleurChoisie) {
        couleurChoisie = document.createElement("select");
        couleurChoisie.setAttribute("id", "couleur");
        couleurChoisie.style.marginLeft = "8px";

        for (var i = 0; i < teddy.colors.length; i++) {
          var couleurPossible = document.createElement("option");
          couleurPossible.setAttribute("id", "couleur");
          couleurPossible.textContent = teddy.colors[i];
          couleur.appendChild(couleurChoisie);
          couleurChoisie.appendChild(couleurPossible);
        }
      }

      choixCouleur();

      // -------------------------------------- Création d'un sous-total permettant de récapituler la commande en cours avant validation

        let sousTotal = document.createElement("p");
        infosArticle.appendChild(sousTotal);
        sousTotal.textContent = "Sous-total :";

        let montantSousTotal = document.createElement("input");
        sousTotal.appendChild(montantSousTotal);
        montantSousTotal.setAttribute("disabled", "disabled");
        montantSousTotal.style.border = "none";
        montantSousTotal.style.marginLeft = "4px";
        montantSousTotal.value = teddy.price / 100 ;
        montantSousTotal.style.backgroundColor = "white";

        // ----------------------------------------------------- Fonction qui va mettre à jour le sous total par rapport à quantité

        inputQuantite.onchange = function () {
          montantSousTotal.value =  parseInt(prixArticle.textContent) * inputQuantite.value ;
        };

        // -------------------------------------- Ne manque plus que les boutons d'ajout au panier et pour consulter le panier

        let conteneurBoutons = document.createElement("div");
      
        infosArticle.appendChild(conteneurBoutons);
        conteneurBoutons.style.display = "flex";
        conteneurBoutons.style.justifyContent = "space-around";

        // --------------------------------------------------- Bouton d'ajout au panier

        let boutonAjouterAuPanier = document.createElement("button");
        conteneurBoutons.appendChild(boutonAjouterAuPanier);
        boutonAjouterAuPanier.textContent = "Ajouter au panier";
        boutonAjouterAuPanier.setAttribute("class", "btn btn-primary");
        boutonAjouterAuPanier.setAttribute("type", "submit");

        // -------------------------------------------------Création du lien vers la page panier

        let anchorPanier = document.createElement("a");
        conteneurBoutons.appendChild(anchorPanier);
        anchorPanier.href = "basket.html";

        let boutonVoirPanier = document.createElement("button");
        anchorPanier.appendChild(boutonVoirPanier);
        boutonVoirPanier.textContent = "Voir mon panier";
        boutonVoirPanier.setAttribute("class", "btn btn-secondary");

         boutonAjouterAuPanier.style.marginBottom = "12px";
         let spanBtn = document.createElement("span");
        //  spanBtn.setAttribute('class','col-')
        spanBtn.style.marginLeft = "20%";
 
         main.appendChild(spanBtn);

         function validerArticle() {
           spanBtn.animate(
             [{ opacity: 0 }, { opacity: 0.9, offset: 0.7 }, { opacity: 1 }],
             2500
           );
           spanBtn.style.opacity = 0;
         }

                 // ------------------------------------ Ne reste plus qu'à pouvoir ajouter le produit au panier.
        // ------------------------- Il faut donc créer la classe Teddy avec infos id, couleur, quantité et sous-total que nous stockerons dans 
        //-------------------------------------------le storage pour les afficher dans le panier"

        class Teddy {
          constructor(teddyId, couleur, quantite, sousTotal, name, img ) {
            this.teddyId = teddyId;
            this.couleur = couleur;
            this.quantite = quantite;
            this.sousTotal = sousTotal;
            this.name = name;
            this.img = img;
          }
        }

        boutonAjouterAuPanier.onclick = function (teddyId, couleur, quantite, sousTotal, name, img) {
          
          // On récupère l'id dans l'url créée pour aller chercher dans storages les autres infos relatives
          teddyId = teddy._id;
          couleur = document.getElementById("couleur").value;
          // console.log(couleur)
          quantite = inputQuantite.value;
          // console.log(inputQuantite.value);
          sousTotal = montantSousTotal.value;
          // console.log(montantSousTotal.value);
          name = nomArticle.textContent;
          img = teddy.imageUrl;
          let teddyAchete = new Teddy(teddyId, couleur, quantite, sousTotal, name, img);
          let contenuPanier = JSON.parse(localStorage.getItem("Mon Panier"));

             function ajouterAuPanier(teddyAchete) {
               contenuPanier.push(teddyAchete);
               totalArticle =
                 parseInt(totalArticle) + parseInt(teddyAchete.quantite);
               montantTotal = montantTotal + parseInt(teddyAchete.sousTotal);
             }

             validerArticle();

          // --------------------------------------- On définit le nombre d'article dans le panier pour itérer le logo de notre panier
          let totalArticle = parseInt(localStorage.getItem('Total Article'));

          // -------------------------------------------On définit le montant total pour pouvoir l'utiliser dans la page panier
          let montantTotal = parseInt(localStorage.getItem("Montant Total"));

          // -------------------------------------------Message de validation 
          spanBtn.innerHTML = '<i class="fas fa-paw" id="papate"></i> L\'article a été mis dans le panier !'
          let papate = document.getElementById('papate');
          papate.style.color = "green"
      
          //---------------------------------------------------- Premier cas de figure, le panier est vide

          if (contenuPanier == null || contenuPanier.length == 0) {
            contenuPanier = [];
            totalArticle = 0;
            montantTotal = 0;
            ajouterAuPanier(teddyAchete);
            
          }

          //--------------------------------------------- Deuxième cas, le panier n'est pas vide.
          else {
            // ---------------------------------------le panier contient t-il le produit en question ?

            for (var i in contenuPanier) {
              var teddyDansPanier = contenuPanier[i];
            }

            // -------------------------Pour le savoir il faut comparer d'abord l'id. S'il n'est pas présent on ajoute le produit.
            //---------------------------- Si l'id est présent, la couleur est-elle la même ? Si non, alors on ajoute le produit

            if (
              teddyAchete.teddyId !== teddyDansPanier.teddyId ||
              (teddyAchete.teddyId == teddyDansPanier.teddyId &&
                teddyAchete.couleur !== teddyDansPanier.couleur)
            ) {
              ajouterAuPanier(teddyAchete);
            } else if (
              teddyAchete.teddyId == teddyDansPanier.teddyId &&
              teddyAchete.couleur == teddyDansPanier.couleur
            ) {
              // -------------Le produit est déjà présent dans le panier. Dans ce cas, on incrémente simplement le sous-total et la quantité du produit concerné

              function mettreAJourLePanier(quantite, sousTotal) {
                teddyDansPanier.quantite = parseInt(teddyDansPanier.quantite) + parseInt(teddyAchete.quantite);
                teddyDansPanier.sousTotal = parseInt(teddyDansPanier.sousTotal) + parseInt(teddyAchete.sousTotal);
                totalArticle = parseInt(totalArticle) + parseInt(teddyAchete.quantite);
                montantTotal = montantTotal + parseInt(teddyAchete.sousTotal);
              }

              mettreAJourLePanier(quantite, sousTotal);
            }
          }

          localStorage.setItem("Mon Panier", JSON.stringify(contenuPanier));
          localStorage.setItem("Total Article",parseInt(totalArticle));
          localStorage.setItem("Montant Total", parseInt(montantTotal));

          let panierHeader = document.getElementById("cardcount");
          panierHeader.textContent = totalArticle;
        };
        // ----------------------------------------- Création de la fonction pour mettre dans le panier storage

        // ------------------------------------ Au click, on va creer et envoyer en session storage les données reçues.

         
  }catch (e) {

    const conteneurProd = document.getElementById('#id');
    console.log(conteneurProd);
    conteneurProd.style.display = "none";
    

    let conteneurErreur = document.createElement("div");
    conteneurErreur.setAttribute("class", "container");
    main.appendChild(conteneurErreur);

    let figureErreur = document.createElement("figure");
    conteneurErreur.appendChild(figureErreur);
    figureErreur.setAttribute("class", "col ");
    figureErreur.style.display = "flex";
    figureErreur.style.width = "80%";
    figureErreur.style.margin = "auto";
    figureErreur.style.marginTop = "2%";

    let imageErreur = document.createElement("img");
    figureErreur.appendChild(imageErreur);
    imageErreur.src = "img/13.png";
    imageErreur.style.width = "80%";

    let messageErreur = document.createElement("figcaption");
    figureErreur.appendChild(messageErreur);
    messageErreur.textContent = "Oups, nous ne trouvons pas l'ourson recherché";
    messageErreur.style.margin = "auto ";
    messageErreur.style.marginLeft = "1%";
    messageErreur.style.fontSize = "2rem";
  }
}
appelDuProduit()











