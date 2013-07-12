import java.util.*;

public class BufferTest {
  private byte arr[];

  public BufferTest() {
    arr = new byte[5];
    arr[0] = 1;
    arr[1] = 2;
    arr[2] = 3;
    arr[3] = 4;
    arr[4] = 5;
  }

  public byte[] getArrayOfBytes() {
    return arr;
  }

  public void setArrayOfBytes(byte[] arr) {
    this.arr = Arrays.copyOf(arr, arr.length);
  }
}
