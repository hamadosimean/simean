function comment()
{
  var comment='<p><input type="email" name="mail" id="mail" placeholder="Your email here"><br/> <label for="comment"> <textarea name="comment" id="comment" cols="30" rows="10">Your comment here</textarea> </label>  <input type="submit" value="Comment Now"> </p>';
  document.getElementById('comment').innerHTML=comment;
}