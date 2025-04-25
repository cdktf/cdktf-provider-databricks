// https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters#cluster_name_contains DataDatabricksClusters#cluster_name_contains}
  */
  readonly clusterNameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters#id DataDatabricksClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters#ids DataDatabricksClusters#ids}
  */
  readonly ids?: string[];
  /**
  * filter_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters#filter_by DataDatabricksClusters#filter_by}
  */
  readonly filterBy?: DataDatabricksClustersFilterBy;
}
export interface DataDatabricksClustersFilterBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters#cluster_sources DataDatabricksClusters#cluster_sources}
  */
  readonly clusterSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters#cluster_states DataDatabricksClusters#cluster_states}
  */
  readonly clusterStates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters#is_pinned DataDatabricksClusters#is_pinned}
  */
  readonly isPinned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters#policy_id DataDatabricksClusters#policy_id}
  */
  readonly policyId?: string;
}

export function dataDatabricksClustersFilterByToTerraform(struct?: DataDatabricksClustersFilterByOutputReference | DataDatabricksClustersFilterBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterSources),
    cluster_states: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterStates),
    is_pinned: cdktf.booleanToTerraform(struct!.isPinned),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
  }
}


export function dataDatabricksClustersFilterByToHclTerraform(struct?: DataDatabricksClustersFilterByOutputReference | DataDatabricksClustersFilterBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_states: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterStates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_pinned: {
      value: cdktf.booleanToHclTerraform(struct!.isPinned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_id: {
      value: cdktf.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksClustersFilterByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksClustersFilterBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSources = this._clusterSources;
    }
    if (this._clusterStates !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStates = this._clusterStates;
    }
    if (this._isPinned !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPinned = this._isPinned;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksClustersFilterBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterSources = undefined;
      this._clusterStates = undefined;
      this._isPinned = undefined;
      this._policyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterSources = value.clusterSources;
      this._clusterStates = value.clusterStates;
      this._isPinned = value.isPinned;
      this._policyId = value.policyId;
    }
  }

  // cluster_sources - computed: false, optional: true, required: false
  private _clusterSources?: string[]; 
  public get clusterSources() {
    return this.getListAttribute('cluster_sources');
  }
  public set clusterSources(value: string[]) {
    this._clusterSources = value;
  }
  public resetClusterSources() {
    this._clusterSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSourcesInput() {
    return this._clusterSources;
  }

  // cluster_states - computed: false, optional: true, required: false
  private _clusterStates?: string[]; 
  public get clusterStates() {
    return this.getListAttribute('cluster_states');
  }
  public set clusterStates(value: string[]) {
    this._clusterStates = value;
  }
  public resetClusterStates() {
    this._clusterStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStatesInput() {
    return this._clusterStates;
  }

  // is_pinned - computed: false, optional: true, required: false
  private _isPinned?: boolean | cdktf.IResolvable; 
  public get isPinned() {
    return this.getBooleanAttribute('is_pinned');
  }
  public set isPinned(value: boolean | cdktf.IResolvable) {
    this._isPinned = value;
  }
  public resetIsPinned() {
    this._isPinned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPinnedInput() {
    return this._isPinned;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters databricks_clusters}
*/
export class DataDatabricksClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksClusters to import
  * @param importFromId The id of the existing DataDatabricksClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.75.0/docs/data-sources/clusters databricks_clusters} Data Source
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
        providerVersion: '1.75.0',
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
    this._ids = config.ids;
    this._filterBy.internalValue = config.filterBy;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // filter_by - computed: false, optional: true, required: false
  private _filterBy = new DataDatabricksClustersFilterByOutputReference(this, "filter_by");
  public get filterBy() {
    return this._filterBy;
  }
  public putFilterBy(value: DataDatabricksClustersFilterBy) {
    this._filterBy.internalValue = value;
  }
  public resetFilterBy() {
    this._filterBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name_contains: cdktf.stringToTerraform(this._clusterNameContains),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      filter_by: dataDatabricksClustersFilterByToTerraform(this._filterBy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name_contains: {
        value: cdktf.stringToHclTerraform(this._clusterNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filter_by: {
        value: dataDatabricksClustersFilterByToHclTerraform(this._filterBy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksClustersFilterByList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
