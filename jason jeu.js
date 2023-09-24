"use strict";

let prenoms=["Léo","Mathéo","Oscar","Martin","Lucas"]; // liste des prénoms des participants

class characteristics{
    constructor(name,attack,die,dieAttack){ // création d'une classe pour donner des infos aux participants
        this.name=name;
        this.attack=attack;
        this.die=die;
        this.dieAttack=dieAttack;
    } 
}

let rat=new characteristics('le rat',0.2,0.3,0.5); // définir les caractéristiques et les pourcentages d'action
let bouffeur=new characteristics('le bouffeur',0.4,0.1,0.5);
let charo=new characteristics('le charo',0.4,0.3,0.3);
let riche=new characteristics('le riche',0.3,0.4,0.3);
let zgeg=new characteristics('le zgeg',0.7,0.1,0.2);

let caractéristiques=[rat,bouffeur,charo,riche,zgeg]; // définir une liste de caractéristiques
class participant{
    constructor(name,characteristics){ // paramètres des participants
        this.name=name;
        this.characteristics=characteristics;
        this.dead=false;
    }
}

let participants1=new participant(prenoms[Math.floor(Math.random()*prenoms.length)],caractéristiques[Math.floor(Math.random()*caractéristiques.length)]) // prénom et caractéristique générés aléatoirement dans les tableaux qui leur correspondent
let participants2=new participant(prenoms[Math.floor(Math.random()*prenoms.length)],caractéristiques[Math.floor(Math.random()*caractéristiques.length)])
let participants3=new participant(prenoms[Math.floor(Math.random()*prenoms.length)],caractéristiques[Math.floor(Math.random()*caractéristiques.length)])
let participants4=new participant(prenoms[Math.floor(Math.random()*prenoms.length)],caractéristiques[Math.floor(Math.random()*caractéristiques.length)])
let participants5=new participant(prenoms[Math.floor(Math.random()*prenoms.length)],caractéristiques[Math.floor(Math.random()*caractéristiques.length)])
let morts=[]

console.log(participants1,participant.characteristics); //afficher les prénoms et les  caractéristiques de chaque participant
console.log(participants2,participant.characteristics);
console.log(participants3,participant.characteristics);
console.log(participants4,participant.characteristics);
console.log(participants5,participant.characteristics);

class killer{
    constructor(name,hp){ // paramètres du tueur
        this.name=name
        this.hp=hp
    }
    attackparticipant(participant){ // actions du jeu
        let action=Math.random(); //random de proba pour savoir ce que le participant va faire
        if(action>participant.characteristics.attack){ //si la proba action est plus grande que la proba d'attaque du participant alors il attaque  
            this.hp = this.hp-10 //enlève 10 hp à Jason
            console.log(participant.name + " esquive et inflige 10 de dégâts à " + this.name ); //afficher l'action
            console.log("il reste " + this.hp + " points de vie à " + this.name); //afficher l'action
        }
        else if(action<participant.characteristics.dieAttack){ //si la proba action est plus petite que la proba d'attaquer en mourant du participant alors il attaque en mourant  
            participant.dead=true //participant meurt
            this.hp = this.hp-15 //le tueur prend -15 hp
            console.log(participant.name + " décède et inflige 15 de dégâts à " + this.name); //afficher l'action
            console.log("il reste " + this.hp + " points de vie à " + this.name);
            morts.push(participant.name); //ajouter le mort au tableau des morts
        }
        else{ 
            participant.dead=true //sinon le partcipant est mort
            console.log(this.name + " a tué " + participant.name); //afficher l'action
            morts.push(participants.name);//ajouter le mort au tableau des morts
        }
    }
}

let tueur=new killer("Jason",100); // création de la variable tueur avec le nom et les hp du tueur
let participants=[participants1,participants2,participants3,participants4,participants5]; // création d'un tableau des participants
let deathCount=0 // création d'un compteur de morts

while(tueur.hp>=0){ // tant que le tueur est vivant
    for(let participant of participants){
        if(participant.dead===true){ // Si un participant meurt
            deathCount=deathCount+1 // on ajoute 1 au compteur de morts
        }
    }
    if(deathCount===participants.length){ // si le compteur de morts arrive au même nombre d'éléments dans le tableau
        console.log("Jason a gagné avec " + tueur.hp + " points de vie !"); //on affiche 
        break; // on finit la boucle
    }else{
        deathCount=0 // sinon reset à 0 et recommencer la boucle
    }
    for(let participant of participants){ // pour chaque survivants de la liste participants
        if(participant.dead===false){ // si les participants sont vivants
            tueur.attackparticipant(participant); // le tueur les attaque
            if(tueur.hp<0){ //si le tueur n'a plus de hp
                console.log("Les participants ont gagné mais RIP à " + morts);
                break;
            }
        }
    }
}

for(let participant of participants){
    if(participant.dead===false){
        console.log(participant.name + " a survécu !"); //affiche les participants qui ne sont pas morts
    }
}

for(let participant of participants){ 
    if(participant.dead===true){  
        morts.push(participant.name); //ajoute les participants morts au tableau des morts
    }
}

//2 "problèmes": les prénoms qui peuvent se répéter et les stats qui ne sont pas vraiment aléatoires.