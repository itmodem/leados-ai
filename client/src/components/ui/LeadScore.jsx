function LeadScore({ score }) {
  const numericScore = Number(score) || 0;
  const clampedScore = Math.min(Math.max(numericScore, 0), 100);
  const level =
    clampedScore >= 80 ? "High" : clampedScore >= 60 ? "Medium" : "Low";

  return (
    <div>
      <p>{clampedScore} / 100</p>
      <p>{level}</p>
    </div>
  );
}

export default LeadScore;
