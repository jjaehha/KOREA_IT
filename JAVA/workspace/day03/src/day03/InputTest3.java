package day03;

import java.util.Scanner;

public class InputTest3 {
	public static void main(String[] args) {
		
		String msg1 = "�̸��� �Է��ϼ���:", msg2 = "���������� �Է��ϼ���: ",
				msg3 = "���������� �Է��ϼ���: ", msg4 = "���������� �Է��ϼ���: ",
				name = "";
		
		int kor = 0, en = 0, math=0, add=0;
		
		double grade = 0.0;
		
	      Scanner sc = new Scanner(System.in);
	      System.out.println(msg1);
	      name = sc.nextLine();

	      System.out.println(msg2);
	      kor = sc.nextInt();
	      sc.nextLine();
	      
	      System.out.println(msg3);
	      en = sc.nextInt();
	      sc.nextLine();
	      
	      System.out.println(msg4);
	      math = sc.nextInt();
	      sc.nextLine();
	      
	      add = kor + en + math;
	      
	      grade = (kor + en + math) / 3;
	      
	      System.out.println("�̸�: " + name);
	      System.out.println("����: " + add);
	      System.out.println("���: " + grade);
		
		
	}

}
