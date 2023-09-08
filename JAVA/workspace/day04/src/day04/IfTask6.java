package day04;

import java.util.Scanner;

public class IfTask6 {
	public static void main(String[] args) {
		
		String day1 = "월", day2 = "화", day3 = "수", day4 = "목", day5 = "금",
			   msg1 = "차량번호를 입력하세요", result = "";
		
		int lastnum = 0, carnum = 0;
		
		Scanner sc = new Scanner(System.in);
	    
		System.out.println(msg1);
	    carnum = sc.nextInt();
	    
	    lastnum = carnum%10;
	    
	    if (lastnum == 1 || lastnum ==6) {
	    	result = "월요일";
	    } else if (lastnum==2 || lastnum==7) {
	    	result = "화요일";
	    } else if (lastnum==3 || lastnum==8) {
	    	result = "수요일";
	    } else if (lastnum==4 || lastnum==9) {
	    	result = "목요일";
	    } else if (lastnum==5 || lastnum==0) {
	    	result = "금요일";
	    }
		
	    System.out.println(result);
	}
}
