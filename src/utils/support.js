export function cutAddress(_value) {
    try {
      if (!_value) {
        return "";
      }
      const leftChars = 10;
      const rightChars = 4;
      if (_value.length > leftChars + rightChars + 3) {
        return `${_value.slice(0, leftChars)}...${_value.slice(-rightChars)}`;
      }
      return _value;
    } catch (err) {
      console.log(err);
    }
}
  