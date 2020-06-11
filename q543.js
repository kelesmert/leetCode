var agac = function(kok) {
    return helper(kok)[1];
  };
  
  function helper(kok) {
    if (!kok) {
      return [-1, 0];
    }
    const sol = helper(kok.sol);
    const sag = helper(kok.sag);
    return [Math.max(sol[0], sag[0]) + 1, Math.max(sol[1], sag[1], sol[0] + sag[0] + 2)];
  }
