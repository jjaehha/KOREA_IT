package day04;

import java.util.Scanner;

public class SwitchTask4 {
	public static void main(String[] args) {
	      Scanner sc = new Scanner(System.in);
	      
	      int mon = 0;
	      String result = null;
	      
	      System.out.print("���� �Է� >> ");
	      mon = sc.nextInt();
	      
	      switch(mon) {
	      case 1,3,5,7,8,10,12:
	         result = mon+"���� ���������� 31���Դϴ�";
	         break;
	      case 2:
	         result = mon+"���� ���������� 28���Դϴ�";
	         break;
	      case 4,6,9,11:
	         result = mon+"���� ���������� 30���Դϴ�";
	         break;
	      default :
	         result = "�߸��Է��߽��ϴ�.";
	      }
	
	}
}