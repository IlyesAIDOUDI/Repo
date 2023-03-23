import React from 'react';

export default function Login() {

    return (
        <form class="form" action="" method="post">
            <h1 class="form-title">Se connecter :</h1>
            <div class="form-group">
                <label class="form-label" for="username">Nom d'utilisateur</label>
                <input type="text" class="form-input" id="username" name="username" placeholder="Nom d'utilisateur" required />
            </div>
            <div class="form-group">
                <label class="form-label" for="password">Mot de passe</label>
                <input type="password" class="form-input" id="password" name="password" placeholder="Mot de passe" required />
            </div>
            <div class="form-group">
                <input type="submit" name="submit" value="Se connecter" class="form-button" />
            </div>
            <p class="form-register">Pas encore inscrit? <a href="/register">Enregistrez-vous ici</a></p>
        </form>

    );
}
