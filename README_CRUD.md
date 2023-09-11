### ENGLISH

1. run npm install in both folders: ./client-app and ./server-app
2. to run the Angular app run the following command in ./client-app folder: ng serve
	the Angular app should run on localhost:4200

3. to run the NestJS app run the following command in ./server-app folder: npm run start
	the NestJS app should run on localhost:3000


In ./server-app/.env file complete those environment variables:
```
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=projects
LOGIN_PASSWORD=
```

for exemple:
```
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=123456
DB_NAME=projects
LOGIN_PASSWORD=password
```


**Danger:** check that you don't have a table named `projects` to run the following commands  :

```sql
--This command create a table with MySQL named "projects" with the following queries

-- Drop the table if it exists and create a new one
DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
	id INT AUTO_INCREMENT PRIMARY KEY,
    reference VARCHAR(255) NOT NULL,
    description TEXT
);
-- Insert 5 rows into the projects table
INSERT INTO projects (reference, description)
VALUES
  ('Reference1', 'Description1'),
  ('Reference2', 'Description2'),
  ('Reference3', 'Description3'),
  ('Reference4', 'Description4'),
  ('Reference5', 'Description5');

-- View the contents of the projects table
SELECT * FROM projects;
```


**Using the Angular User Interface**

1. **Logging In:**
    - Upon launching the application, you will be presented with a password form.
    - Enter the password that corresponds to the `LOGIN_PASSWORD` set in your `.env` file.

2. **Viewing the Database:**
    - After successful login, you will gain access to the database.

3. **Edit Database** :
    - To modify the database, click on the 'Edit' button located in the bottom-left corner.

4. **Deleting a Row:**
    - To delete a row, simply click on the row you wish to delete.
    - Then, click on the "Delete Row" button to confirm the deletion.

5. **Updating a Row:**
    - To update a row, click on the row you want to modify.
    - Edit the table by inserting new values into the respective fields.
    - Finally, click on the "Update Row" button to save your changes.

6. **Creating a New Row:**
    - To create a new row, enter values directly into the `Edit Line` table.
    - Then, click on the "Add Row" button to add the row.
    - There's no need to provide an ID because it is automatically generated (auto-incremented) by the system.


###  FRENCH

1. Exécutez `npm install` dans les deux dossiers : `./client-app` et `./server-app`.

2. Pour lancer l'application Angular, exécutez la commande suivante dans le dossier `./client-app` : `ng serve`.
    - L'application Angular devrait s'exécuter sur `localhost:4200`.


3. Pour lancer l'application NestJS, exécutez la commande suivante dans le dossier `./server-app` : `npm run start`.
   L'application NestJS devrait s'exécuter sur `localhost:3000`.

Dans le fichier `./server-app/.env`, remplissez les variables d'environnement suivantes :

```env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=projects
LOGIN_PASSWORD=
```

Par exemple :
```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=123456
DB_NAME=projects
LOGIN_PASSWORD=motdepasse
```

**Attention :** Assurez-vous de ne pas avoir une table nommée `projects` avant d'exécuter les commandes suivantes :

```sql
-- Cette commande crée une table MySQL nommée "projects" avec les requêtes suivantes

-- Supprimez la table si elle existe et créez en une nouvelle
DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
	id INT AUTO_INCREMENT PRIMARY KEY,
    reference VARCHAR(255) NOT NULL,
    description TEXT
);
-- Insérez 5 lignes dans la table projects
INSERT INTO projects (reference, description)
VALUES
  ('Référence1', 'Description1'),
  ('Référence2', 'Description2'),
  ('Référence3', 'Description3'),
  ('Référence4', 'Description4'),
  ('Référence5', 'Description5');

-- Affichez le contenu de la table projects
SELECT * FROM projects;
```

**Utilisation de l'interface utilisateur Angular**

1. **Connexion :**
    - Lorsque vous lancez l'application, vous serez vous serez face à  un formulaire de mot de passe.
    - Entrez le mot de passe correspondant à `LOGIN_PASSWORD` défini dans votre fichier `.env`.

2. **Consultation de la base de données :**
    - Après une connexion réussie, vous aurez accès à la base de données.

3. **Modifier la base de données**
    - "Pour modifier la base de données, cliquez sur le bouton 'Éditer' situé dans le coin inférieur gauche.

4. **Suppression d'une ligne :**
    - Pour supprimer une ligne, cliquez simplement sur la ligne que vous souhaitez supprimer.
    - Ensuite, cliquez sur le bouton "Delete Row" pour confirmer la suppression.

5. **Mise à jour d'une ligne :**
    - Pour mettre à jour une ligne, cliquez sur la ligne que vous souhaitez modifier.
    - Modifiez la table en insérant de nouvelles valeurs dans les champs respectifs.
    - Enfin, cliquez sur le bouton "Update Row" pour enregistrer vos modifications.

6. **Création d'une nouvelle ligne :**
    - Pour créer une nouvelle ligne, saisissez des valeurs directement dans la table de la ligne d'édition.
    - Cliquez ensuite sur le bouton "Add Row" pour ajouter la ligne.
    - Il n'est pas nécessaire de fournir un ID car il est généré automatiquement (auto-incrémenté) par le système.