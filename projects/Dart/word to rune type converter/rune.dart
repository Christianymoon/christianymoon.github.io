import 'dart:io';

void main() {

	String? word = null;

	do {

		print("Set a word: ");
		word = stdin.readLineSync();
		if (word == null) {
			print("No value provided");
			break;
		}

		if (word.isNotEmpty) {
			for (int rune in word.runes) {
				print(rune);
			}
		} else {
			print("Exiting...");
		}

	} while(word.isNotEmpty);


}