import React from 'react';

export default function Register() {

    return (
        <form class="form" action="" method="post">
            <h1 class="form-title">S'inscrire :</h1>
            <div class="form-group">
                <label class="form-label" for="username">Nom d'utilisateur</label>
                <input type="text" class="form-input" id="username" name="username" placeholder="Nom d'utilisateur" required />
            </div>
            <div class="form-group">
                <label class="form-label" for="email">Email</label>
                <input type="email" class="form-input" id="email" name="email" placeholder="Email" required />
            </div>
            <div class="form-group">
                <label class="form-label" for="password">Mot de passe</label>
                <input type="password" class="form-input" id="password" name="password" placeholder="Mot de passe" required />
            </div>
            <div class="form-group">
                <input type="submit" name="submit" value="S'inscrire" class="form-button" />
            </div>
            <p class="form-register">Déjà inscrit? <a href="/login">Connectez-vous ici</a></p>
        </form>

    );
}
