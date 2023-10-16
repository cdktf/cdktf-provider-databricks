// https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/data-sources/clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/data-sources/clusters#cluster_name_contains DataDatabricksClusters#cluster_name_contains}
  */
  readonly clusterNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/data-sources/clusters#id DataDatabricksClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/data-sources/clusters databricks_clusters}
*/
export class DataDatabricksClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_clusters";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.28.0/docs/data-sources/clusters databricks_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_clusters',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.28.0',
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
    this._clusterNameContains = config.clusterNameContains;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name_contains - computed: false, optional: true, required: false
  private _clusterNameContains?: string; 
  public get clusterNameContains() {
    return this.getStringAttribute('cluster_name_contains');
  }
  public set clusterNameContains(value: string) {
    this._clusterNameContains = value;
  }
  public resetClusterNameContains() {
    this._clusterNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameContainsInput() {
    return this._clusterNameContains;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name_contains: cdktf.stringToTerraform(this._clusterNameContains),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
