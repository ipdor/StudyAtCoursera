//export CLASSPATH=/home/ubuntu/2-code/StudyAtCoursera/Algorithms_Part_I/Week1/jar/algs4.jar:$CLASSPATH
import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

/**
 * RandomWord
 */
public class RandomWord {
    /*
     * Use the following library functions from algs4.jar:

     * StdIn.readString(): reads and returns the next string from standard input.

     * StdIn.isEmpty(): returns true if there are no more strings available on standard input, and false otherwise.

     * StdOut.println(): prints a string and terminating newline to standard output. 
     * It's also fine to use System.out.println() instead.

     * StdRandom.bernoulli(p): returns true with probability p and false with probability 1鈭抪.
     */
    public static void main(String[] args) {
        String ans = "";
        for(int i = 1; !StdIn.isEmpty(); i++){

            if (StdRandom.bernoulli(1.0/i)) {
                ans = StdIn.readString();
            }
            else
                StdIn.readString();
        }
        StdOut.println(ans); //如果放在循环里，ctrl+d退出会导致异常
        return;
    }
}