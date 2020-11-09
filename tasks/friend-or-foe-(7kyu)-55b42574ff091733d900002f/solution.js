export default function friend(friends) {
  return friends.filter(function(friend) {
    return friend.length === 4;
  });
}
