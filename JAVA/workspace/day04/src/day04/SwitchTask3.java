package day04;

import java.util.Scanner;

public class SwitchTask3 {
	public static void main(String[] args) {
        
		Scanner sc = new Scanner(System.in);
        String result = null;
        
        System.out.println("월을 입력하세요");
        int month = sc.nextInt();
        
        switch(month) {
        case 3,4,5:
        	result = month + "월은 봄입니다";
        	break;
        case 6,7,8:
        	result = month + "월은 여름입니다";
        	break;
        case 9,10,11:
        	result = month + "월은 가을입니다";
        	break;
        case 12,1,2:
        	result = month + "원은 겨울입니다";
        	break;
        }
        System.out.println(result);
	}
}
