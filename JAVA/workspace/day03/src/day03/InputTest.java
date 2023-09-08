package day03;

import java.util.Scanner;

public class InputTest {
	public static void main(String[] args) {
		/*
		 * 두자릿수 정수를 입력받고 십의자리
		 * 일의자리를 출력하는 프로그램
		 * 
		 * 1. 변수 1개를 선언한다(int)
		 * 2. 출력한다.("두자릿수 정수를 입력하시오.:")
		 * 3. 입력받아서 저장한다.
		 * 4. 연산한다
		 * 	4-1. 입력받은 값을 10으로 나눈다(10의자리)
		 * 	4-2. 입력받은 값을 10으로 나눈 후 나머지를 구한다(1의 자리)
		 * 5. 결과 출력
		 * 	"53의 십의자리는 5이고, 일의자리는 3이다."
		 */
		
		
		int num1, num2, num3;
		
		Scanner sc = new Scanner(System.in);
		System.out.print("두자릿수 정수를 입력하시오.: ");
		num1 = sc.nextInt();
		
		num2 = num1 /10;
		num3 = num1 %10;
		
		System.out.println(num1 + "의 십의자리는" + num2 +"이고, 일의자리는" + num3 + "이다.");
		

	}

}
