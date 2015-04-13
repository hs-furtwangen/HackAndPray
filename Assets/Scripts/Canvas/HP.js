#pragma strict

var displayHP : UnityEngine.UI.Text;

function Start () 
{
	displayHP = gameObject.GetComponent(UI.Text);
}

function Update () 
{
	displayHP.text = "Lives: " + GlobalStuff.HP.ToString();
}