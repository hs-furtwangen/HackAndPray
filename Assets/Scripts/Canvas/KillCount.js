#pragma strict

var displayKillCount : UnityEngine.UI.Text;

function Start () 
{
	displayKillCount = gameObject.GetComponent(UI.Text);
}

function Update () 
{
	displayKillCount.text = "Kills: " + GlobalStuff.killCount.ToString();
}