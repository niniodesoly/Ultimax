Feature: Test de autenticación de usuario

Background:
Given Usuario navega en la aplicacion

Scenario: Logueo con easy y marcar horas de trabajo
	And Usuario ingresa el username as "2511724"
	When Usuario hace click en el boton de easy
	When Usuario hace click en el boton de dia
	When Usuario hace click en el boton de submit

Scenario: Logueo con autocode y marcar horas de trabajo
	And Usuario ingresa el username as "2511724"
	When Usuario hace click en el boton de autocode
	When Usuario hace click en el boton de dia
	When Usuario hace click en el boton de submit