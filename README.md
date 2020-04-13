# www.statscovid19.it
Statistiche a livello nazionale e regionale sul COVID-19

## Getting started

Clona il repository
```shell
$ git clone git@github.com:carmelocatalfamo/statscovid19.git statscovid19
```

Accedi alla cartella del progetto e copia le variabili ambientali
```shell
$ cd statscovid19 && cp .env.tpl .env
```

Avvio con docker-compose
```shell
$ docker-compose up
```

<br />


## Segnalazioni issues

Visitare il [repository dedicato alle issues](https://github.com/carmelocatalfamo/statscovid19-issues)

<br />

## Deploy in produzione

Entrare via ssh sul droplet di digitalocean e lanciare lo script `./updateWebsite.sh`. Questo entra nella cartella in cui si trova il repository di produzione, esegue un pull e fa la build della nuova immagine.
