using UnityEngine;
using System.Collections;

public class Back : MonoBehaviour 
{
	public void back()
	{
		Application.LoadLevel ("Menue");
	}
	public void toDisclaimer()
	{
		Application.LoadLevel ("Disclaimer");
	}
}