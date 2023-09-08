package day02;

public class PrintTest {
	public static void main(String[] args) {
		System.out.print("안녕\n");
		System.out.print("하세요\n");
		
		String name = "김재하";
		System.out.println("제이름은 name입니다");
		System.out.printf("제이름은 %s 입니다", name);
		System.out.println();
		
		// printf
		
		System.out.printf("제 컴퓨터점수는 %010d점입니다\n", 100);
		System.out.printf("제 평균점수는 %.2f점 입니다\n", 88.1234);
		System.out.printf("제 학점은 %c 입니다\n",'A');
		
		
//		내가 한거	
		String price1 = "500원";
		String price2 = "1500원";
		String price3 = "2000원";
		System.out.print("=====영수증=====\n");
		System.out.printf("사과 %10s\n", price1);
		System.out.printf("포도 %10s\n", price2);
		System.out.printf("바나나 %9s\n", price3);
		System.out.print("==============\n");
		
		
		String fruit1 = "포도";
		String fruit2 = "사과";
		String fruit3 = "바나나";
		System.out.println("========영수증========");
		System.out.printf("%s\t\t%5s\n",fruit1,price1);
		System.out.printf("%s\t\t%5s\n",fruit2,price2);
		System.out.printf("%s\t\t%5s\n",fruit3,price3);
		
		
	}

}
