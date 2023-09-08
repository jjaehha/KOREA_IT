package day04;

import java.util.Scanner;

public class IfTask8 {
	public static void main(String[] args) {
		
	      Scanner sc = new Scanner(System.in);
	      System.out.println("점수를 입력하세요");
	      int score = sc.nextInt();
	      System.out.println("학년을 입력하세요");
	      int grade = sc.nextInt();
	
//		if (100<score || score<0) {
//			System.out.println("잘못입력했습니다.");
//		} else if (score<101 && -1<score) {
//			if (grade == 4) {
//				if(70<=score) {
//					System.out.println("합격입니다");
//				}else {
//					System.out.println("불합격입니다");
//				}
//			} else if (grade == 1 || grade == 2 || grade == 3) {
//				if(60<=score) {
//					System.out.println("합격입니다");
//				}else {
//					System.out.println("불합격입니다");
//				}
//			}
//		}
	    
	      if(score <0 || score>100) {
	          System.out.println("잘못입력하였습니다.");
	       }
	       else if(score >=60) {
	          if(grade!=4) {
	             System.out.println("합격");
	          }
	          else if(score >=70) {
	             System.out.println("합격");
	          }else {
	             System.out.println("불합격");
	          }
	       }
	       else {
	          System.out.println("불합격");
	       }

	}
}
