function logDriverNames(drivers) {
  for(i = 0; i < drivers.length; i++){
    console.log(drivers[i].name)
  }
}

function logDriversByHometown(drivers, ht) {
  drivers.forEach(function(el) {
      if (el.hometown == ht) {
        console.log(el.name)
      }
    }
  )
}

function driversByRevenue(drivers) {
  const arr = [...drivers]
    arr.sort(function(a, b) {
        return a.revenue - b.revenue
      }
    )
  return arr
}

function driversByName(drivers) {
  const arr = [...drivers]
    arr.sort(function(a, b){
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    }
  )
  return arr
}

function totalRevenue(drivers) {
  const arr = [...drivers]
  return arr.reduce(function getSum(total, sum){ return total + sum.revenue; }, 0)
}

function averageRevenue(drivers) {
  const arr = [...drivers]
  return arr.reduce(function getSum(total, sum){ return (total + sum.revenue);}, 0) / arr.length 
}
