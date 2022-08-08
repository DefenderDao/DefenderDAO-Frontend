import React from 'react';
import { Proposal } from '../../App';

type Props = {
  recentProposals: Proposal[];
};

const Proposals = ({ recentProposals }: Props) => {
  const proposalsRows = recentProposals.map(proposal =>
    <tr key={proposal.id}>
      <td>
        {proposal.url}
      </td>
      <td>
        {proposal.address}
      </td>
      <td>
        {proposal.subDate}
      </td>
    </tr>
  );

  return <div>Proposals</div>;
};

export default Proposals;
