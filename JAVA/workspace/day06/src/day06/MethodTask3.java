package day06;

public class MethodTask3 {
	public static void main(String[] args) {
		MethodTask3 mt = new MethodTask3();
		System.out.println(mt.trans(-10));
		
		mt.name("김재하", 5);
		
		mt.change("aPplE");
	}

	
	int trans(int num) {

		num = num * -1;
		return num;
	}
	
	void name(String name, int num){
		for (int i = 0; i<num; i++) {
			System.out.println(i + 1 + name);
		}
	}
	
	String change(String str) {
		char c = ' ';
		String result = "";
		for(int i = 0; i<str.length(); i++) {
			c = str.charAt(i);
			if(c>=97&&c<=122) { // 소문자 범위
				result += (char)(c-32); // 소문자를 대문자로
			} else if(c>=65 && c<=90) { // 대문자 범위
				result += (char)(c+32); // 대문자를 소문자로
			} else {
				result = "잘못입력하였습니다";
			}
		}
		return result;
	}
	
}
