// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  return {
    specimenNum: number,
    dna: array,

    mutate: function() {
      let indexOfRandomBase = Math.floor(Math.random() * 15); 
      let randomBase = this.dna[indexOfRandomBase];
      let mutation = returnRandBase(); 

      while (randomBase === mutation) {
        mutation = returnRandBase(); 
      }

      this.dna.splice(indexOfRandomBase, 1, mutation);
      return this.dna;
    },

    compareDNA(pAequor) {
      let firstSeq = this.dna;
      let secondSeq = pAequor.dna;
      let same = 0; 

      for (let i = 0; i < 15; i++) {
          if (firstSeq[i] === secondSeq[i]) {
            same++;
          }
      }

      let percentage = (same/15)*100;
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common.`);

    },

    willLikelySurvive() {
      let survivalBases = 0;

      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === 'C' || this.dna[i] ==='G') {
          survivalBases++;
        }
      }
      let survivalrate = (survivalBases/15)*100;
      if (survivalrate >= 60) {
        return true;
      } else {
        return false;
      }
    }
  };
};

const viableSubjects = (number) => {
  let subjectBatch = [];
  let i = 1;

  while (subjectBatch.length < number) {
    let specimen = {};
    specimen = pAequorFactory(i, mockUpStrand());

    if (specimen.willLikelySurvive() === true) {
      subjectBatch.push(specimen);
    }
    i++;
  }
  return subjectBatch;
};

let testBatch = viableSubjects(30);
console.log(testBatch);





