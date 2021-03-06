export default `
	type ImmutableState {
		input_duration: Int!
		challenge_period: Int!
		contract_creation_timestamp: Int!
		input_contract_address: String!
		output_contract_address: String!
		validator_contract_address: String!
		dispute_contract_address: String!
		descartesv2_contract_address: String!
	}

	type EpochInputState {
		epoch_number: Int!
		inputs: [Int]!
		input_contract_address: String!
	}

	type FinalizedEpoch {
		epoch_number: Int!
		hash: Int!
		inputs: EpochInputState!
		finalized_block_hash: String!
		finalized_block_number: Int!
	}

	type FinalizedEpochs {
		finalized_epochs: [FinalizedEpoch]!
		initial_epoch: Int!
		descartesv2_contract_address: String!
		input_contract_address: String!
	}

	type EpochInputState {
		epoch_number: Int!
		inputs: [Int]!
		input_contract_address: String!
	}

	type AccumulatingEpoch {
		epoch_number: Int!
		inputs: EpochInputState!
		descartesv2_contract_address: String!
		input_contract_address: String!
	}

	enum PhaseState {
		InputAccumulation
		EpochSealedAwaitingFirstClaim
		AwaitingConsensusNoConflict
		AwaitingConsensusAfterConflict
		ConsensusTimeout
		AwaitingDispute
	}

	type IntegerBool {
		integer: Boolean!
	}

	type IntegerInnerObject {
		integer: IntegerBool!
	}

	type IntegerObject {
		integer: IntegerBool!
	}

	type OutputState {
		output_address: String!
		outputs: IntegerObject!
	}

	type Query {
		constants: ImmutableState!
		initial_epoch: Int!
		finalized_epochs: FinalizedEpochs!
		current_epoch: AccumulatingEpoch!
		current_phase: PhaseState!
		output_state: OutputState!
	}
`;