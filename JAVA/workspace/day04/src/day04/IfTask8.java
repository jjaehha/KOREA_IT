package day04;

import java.util.Scanner;

public class IfTask8 {
	public static void main(String[] args) {
		
	      Scanner sc = new Scanner(System.in);
	      System.out.println("������ �Է��ϼ���");
	      int score = sc.nextInt();
	      System.out.println("�г��� �Է��ϼ���");
	      int grade = sc.nextInt();
	
//		if (100<score || score<0) {
//			System.out.println("�߸��Է��߽��ϴ�.");
//		} else if (score<101 && -1<score) {
//			if (grade == 4) {
//				if(70<=score) {
//					System.out.println("�հ��Դϴ�");
//				}else {
//					System.out.println("���հ��Դϴ�");
//				}
//			} else if (grade == 1 || grade == 2 || grade == 3) {
//				if(60<=score) {
//					System.out.println("�հ��Դϴ�");
//				}else {
//					System.out.println("���հ��Դϴ�");
//				}
//			}
//		}
	    
	      if(score <0 || score>100) {
	          System.out.println("�߸��Է��Ͽ����ϴ�.");
	       }
	       else if(score >=60) {
	          if(grade!=4) {
	             System.out.println("�հ�");
	          }
	          else if(score >=70) {
	             System.out.println("�հ�");
	          }else {
	             System.out.println("���հ�");
	          }
	       }
	       else {
	          System.out.println("���հ�");
	       }

	}
}
