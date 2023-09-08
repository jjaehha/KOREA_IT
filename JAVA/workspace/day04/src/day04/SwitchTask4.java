package day04;

import java.util.Scanner;

public class SwitchTask4 {
	public static void main(String[] args) {
	      Scanner sc = new Scanner(System.in);
	      
	      int mon = 0;
	      String result = null;
	      
	      System.out.print("월을 입력 >> ");
	      mon = sc.nextInt();
	      
	      switch(mon) {
	      case 1,3,5,7,8,10,12:
	         result = mon+"월의 마지막일은 31일입니다";
	         break;
	      case 2:
	         result = mon+"월의 마지막일은 28일입니다";
	         break;
	      case 4,6,9,11:
	         result = mon+"월의 마지막일은 30일입니다";
	         break;
	      default :
	         result = "잘못입력했습니다.";
	      }
	
	}
}