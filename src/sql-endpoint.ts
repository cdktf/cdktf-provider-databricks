// https://www.terraform.io/docs/providers/databricks/r/sql_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#auto_stop_mins SqlEndpoint#auto_stop_mins}
  */
  readonly autoStopMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#cluster_size SqlEndpoint#cluster_size}
  */
  readonly clusterSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#data_source_id SqlEndpoint#data_source_id}
  */
  readonly dataSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#enable_photon SqlEndpoint#enable_photon}
  */
  readonly enablePhoton?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#enable_serverless_compute SqlEndpoint#enable_serverless_compute}
  */
  readonly enableServerlessCompute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#instance_profile_arn SqlEndpoint#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#jdbc_url SqlEndpoint#jdbc_url}
  */
  readonly jdbcUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#max_num_clusters SqlEndpoint#max_num_clusters}
  */
  readonly maxNumClusters?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#min_num_clusters SqlEndpoint#min_num_clusters}
  */
  readonly minNumClusters?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#name SqlEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#num_clusters SqlEndpoint#num_clusters}
  */
  readonly numClusters?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#spot_instance_policy SqlEndpoint#spot_instance_policy}
  */
  readonly spotInstancePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#state SqlEndpoint#state}
  */
  readonly state?: string;
  /**
  * channel block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#channel SqlEndpoint#channel}
  */
  readonly channel?: SqlEndpointChannel;
  /**
  * odbc_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#odbc_params SqlEndpoint#odbc_params}
  */
  readonly odbcParams?: SqlEndpointOdbcParams;
  /**
  * tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#tags SqlEndpoint#tags}
  */
  readonly tags?: SqlEndpointTags;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#timeouts SqlEndpoint#timeouts}
  */
  readonly timeouts?: SqlEndpointTimeouts;
}
export interface SqlEndpointChannel {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#name SqlEndpoint#name}
  */
  readonly name?: string;
}

export function sqlEndpointChannelToTerraform(struct?: SqlEndpointChannelOutputReference | SqlEndpointChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class SqlEndpointChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlEndpointChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlEndpointChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface SqlEndpointOdbcParams {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#host SqlEndpoint#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#hostname SqlEndpoint#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#path SqlEndpoint#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#port SqlEndpoint#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#protocol SqlEndpoint#protocol}
  */
  readonly protocol: string;
}

export function sqlEndpointOdbcParamsToTerraform(struct?: SqlEndpointOdbcParamsOutputReference | SqlEndpointOdbcParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class SqlEndpointOdbcParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlEndpointOdbcParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlEndpointOdbcParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._hostname = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._hostname = value.hostname;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface SqlEndpointTagsCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#key SqlEndpoint#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#value SqlEndpoint#value}
  */
  readonly value: string;
}

export function sqlEndpointTagsCustomTagsToTerraform(struct?: SqlEndpointTagsCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SqlEndpointTags {
  /**
  * custom_tags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#custom_tags SqlEndpoint#custom_tags}
  */
  readonly customTags: SqlEndpointTagsCustomTags[] | cdktf.IResolvable;
}

export function sqlEndpointTagsToTerraform(struct?: SqlEndpointTagsOutputReference | SqlEndpointTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: cdktf.listMapper(sqlEndpointTagsCustomTagsToTerraform)(struct!.customTags),
  }
}

export class SqlEndpointTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlEndpointTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlEndpointTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTags = value.customTags;
    }
  }

  // custom_tags - computed: false, optional: false, required: true
  private _customTags?: SqlEndpointTagsCustomTags[] | cdktf.IResolvable; 
  public get customTags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_tags');
  }
  public set customTags(value: SqlEndpointTagsCustomTags[] | cdktf.IResolvable) {
    this._customTags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags;
  }
}
export interface SqlEndpointTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint#create SqlEndpoint#create}
  */
  readonly create?: string;
}

export function sqlEndpointTimeoutsToTerraform(struct?: SqlEndpointTimeoutsOutputReference | SqlEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export class SqlEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlEndpointTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlEndpointTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint databricks_sql_endpoint}
*/
export class SqlEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks/r/sql_endpoint databricks_sql_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: SqlEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '0.5.8',
        providerVersionConstraint: '~> 0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._autoStopMins = config.autoStopMins;
    this._clusterSize = config.clusterSize;
    this._dataSourceId = config.dataSourceId;
    this._enablePhoton = config.enablePhoton;
    this._enableServerlessCompute = config.enableServerlessCompute;
    this._instanceProfileArn = config.instanceProfileArn;
    this._jdbcUrl = config.jdbcUrl;
    this._maxNumClusters = config.maxNumClusters;
    this._minNumClusters = config.minNumClusters;
    this._name = config.name;
    this._numClusters = config.numClusters;
    this._spotInstancePolicy = config.spotInstancePolicy;
    this._state = config.state;
    this._channel.internalValue = config.channel;
    this._odbcParams.internalValue = config.odbcParams;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_stop_mins - computed: false, optional: true, required: false
  private _autoStopMins?: number; 
  public get autoStopMins() {
    return this.getNumberAttribute('auto_stop_mins');
  }
  public set autoStopMins(value: number) {
    this._autoStopMins = value;
  }
  public resetAutoStopMins() {
    this._autoStopMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStopMinsInput() {
    return this._autoStopMins;
  }

  // cluster_size - computed: false, optional: false, required: true
  private _clusterSize?: string; 
  public get clusterSize() {
    return this.getStringAttribute('cluster_size');
  }
  public set clusterSize(value: string) {
    this._clusterSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeInput() {
    return this._clusterSize;
  }

  // data_source_id - computed: true, optional: true, required: false
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  public resetDataSourceId() {
    this._dataSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // enable_photon - computed: false, optional: true, required: false
  private _enablePhoton?: boolean | cdktf.IResolvable; 
  public get enablePhoton() {
    return this.getBooleanAttribute('enable_photon');
  }
  public set enablePhoton(value: boolean | cdktf.IResolvable) {
    this._enablePhoton = value;
  }
  public resetEnablePhoton() {
    this._enablePhoton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePhotonInput() {
    return this._enablePhoton;
  }

  // enable_serverless_compute - computed: false, optional: true, required: false
  private _enableServerlessCompute?: boolean | cdktf.IResolvable; 
  public get enableServerlessCompute() {
    return this.getBooleanAttribute('enable_serverless_compute');
  }
  public set enableServerlessCompute(value: boolean | cdktf.IResolvable) {
    this._enableServerlessCompute = value;
  }
  public resetEnableServerlessCompute() {
    this._enableServerlessCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableServerlessComputeInput() {
    return this._enableServerlessCompute;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_profile_arn - computed: false, optional: true, required: false
  private _instanceProfileArn?: string; 
  public get instanceProfileArn() {
    return this.getStringAttribute('instance_profile_arn');
  }
  public set instanceProfileArn(value: string) {
    this._instanceProfileArn = value;
  }
  public resetInstanceProfileArn() {
    this._instanceProfileArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceProfileArnInput() {
    return this._instanceProfileArn;
  }

  // jdbc_url - computed: true, optional: true, required: false
  private _jdbcUrl?: string; 
  public get jdbcUrl() {
    return this.getStringAttribute('jdbc_url');
  }
  public set jdbcUrl(value: string) {
    this._jdbcUrl = value;
  }
  public resetJdbcUrl() {
    this._jdbcUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUrlInput() {
    return this._jdbcUrl;
  }

  // max_num_clusters - computed: false, optional: true, required: false
  private _maxNumClusters?: number; 
  public get maxNumClusters() {
    return this.getNumberAttribute('max_num_clusters');
  }
  public set maxNumClusters(value: number) {
    this._maxNumClusters = value;
  }
  public resetMaxNumClusters() {
    this._maxNumClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNumClustersInput() {
    return this._maxNumClusters;
  }

  // min_num_clusters - computed: false, optional: true, required: false
  private _minNumClusters?: number; 
  public get minNumClusters() {
    return this.getNumberAttribute('min_num_clusters');
  }
  public set minNumClusters(value: number) {
    this._minNumClusters = value;
  }
  public resetMinNumClusters() {
    this._minNumClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNumClustersInput() {
    return this._minNumClusters;
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

  // num_clusters - computed: false, optional: true, required: false
  private _numClusters?: number; 
  public get numClusters() {
    return this.getNumberAttribute('num_clusters');
  }
  public set numClusters(value: number) {
    this._numClusters = value;
  }
  public resetNumClusters() {
    this._numClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numClustersInput() {
    return this._numClusters;
  }

  // spot_instance_policy - computed: false, optional: true, required: false
  private _spotInstancePolicy?: string; 
  public get spotInstancePolicy() {
    return this.getStringAttribute('spot_instance_policy');
  }
  public set spotInstancePolicy(value: string) {
    this._spotInstancePolicy = value;
  }
  public resetSpotInstancePolicy() {
    this._spotInstancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstancePolicyInput() {
    return this._spotInstancePolicy;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // channel - computed: false, optional: true, required: false
  private _channel = new SqlEndpointChannelOutputReference(this, "channel");
  public get channel() {
    return this._channel;
  }
  public putChannel(value: SqlEndpointChannel) {
    this._channel.internalValue = value;
  }
  public resetChannel() {
    this._channel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel.internalValue;
  }

  // odbc_params - computed: false, optional: true, required: false
  private _odbcParams = new SqlEndpointOdbcParamsOutputReference(this, "odbc_params");
  public get odbcParams() {
    return this._odbcParams;
  }
  public putOdbcParams(value: SqlEndpointOdbcParams) {
    this._odbcParams.internalValue = value;
  }
  public resetOdbcParams() {
    this._odbcParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbcParamsInput() {
    return this._odbcParams.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new SqlEndpointTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: SqlEndpointTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_stop_mins: cdktf.numberToTerraform(this._autoStopMins),
      cluster_size: cdktf.stringToTerraform(this._clusterSize),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      enable_photon: cdktf.booleanToTerraform(this._enablePhoton),
      enable_serverless_compute: cdktf.booleanToTerraform(this._enableServerlessCompute),
      instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
      jdbc_url: cdktf.stringToTerraform(this._jdbcUrl),
      max_num_clusters: cdktf.numberToTerraform(this._maxNumClusters),
      min_num_clusters: cdktf.numberToTerraform(this._minNumClusters),
      name: cdktf.stringToTerraform(this._name),
      num_clusters: cdktf.numberToTerraform(this._numClusters),
      spot_instance_policy: cdktf.stringToTerraform(this._spotInstancePolicy),
      state: cdktf.stringToTerraform(this._state),
      channel: sqlEndpointChannelToTerraform(this._channel.internalValue),
      odbc_params: sqlEndpointOdbcParamsToTerraform(this._odbcParams.internalValue),
      tags: sqlEndpointTagsToTerraform(this._tags.internalValue),
      timeouts: sqlEndpointTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
