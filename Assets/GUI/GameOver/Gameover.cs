using UnityEngine;
using System.Collections;

public class Gameover : MonoBehaviour {

	public void Back()
	{
		Application.LoadLevel ("Menue");
	}
	public void Newstart()
	{
		Application.LoadLevel ("Game");
	}
}