package day06;

public class MethodTask3 {
	public static void main(String[] args) {
		MethodTask3 mt = new MethodTask3();
		System.out.println(mt.trans(-10));
		
		mt.name("������", 5);
		
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
			if(c>=97&&c<=122) { // �ҹ��� ����
				result += (char)(c-32); // �ҹ��ڸ� �빮�ڷ�
			} else if(c>=65 && c<=90) { // �빮�� ����
				result += (char)(c+32); // �빮�ڸ� �ҹ��ڷ�
			} else {
				result = "�߸��Է��Ͽ����ϴ�";
			}
		}
		return result;
	}
	
}
