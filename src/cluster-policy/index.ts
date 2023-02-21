// https://www.terraform.io/docs/providers/databricks/r/cluster_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy definition JSON document expressed in
Databricks Policy Definition Language.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/cluster_policy#definition ClusterPolicy#definition}
  */
  readonly definition: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/cluster_policy#id ClusterPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Max number of clusters per user that can be active
using this policy. If not present, there is no max limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/cluster_policy#max_clusters_per_user ClusterPolicy#max_clusters_per_user}
  */
  readonly maxClustersPerUser?: number;
  /**
  * Cluster policy name. This must be unique.
Length must be between 1 and 100 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/cluster_policy#name ClusterPolicy#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/cluster_policy databricks_cluster_policy}
*/
export class ClusterPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_cluster_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/cluster_policy databricks_cluster_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_cluster_policy',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.10.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._definition = config.definition;
    this._id = config.id;
    this._maxClustersPerUser = config.maxClustersPerUser;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: false, optional: false, required: true
  private _definition?: string; 
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string) {
    this._definition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_clusters_per_user - computed: false, optional: true, required: false
  private _maxClustersPerUser?: number; 
  public get maxClustersPerUser() {
    return this.getNumberAttribute('max_clusters_per_user');
  }
  public set maxClustersPerUser(value: number) {
    this._maxClustersPerUser = value;
  }
  public resetMaxClustersPerUser() {
    this._maxClustersPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClustersPerUserInput() {
    return this._maxClustersPerUser;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      definition: cdktf.stringToTerraform(this._definition),
      id: cdktf.stringToTerraform(this._id),
      max_clusters_per_user: cdktf.numberToTerraform(this._maxClustersPerUser),
      name: cdktf.stringToTerraform(this._name),
    };
  }
}
