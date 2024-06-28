// https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatabricksSqlWarehouseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#auto_stop_mins DataDatabricksSqlWarehouse#auto_stop_mins}
  */
  readonly autoStopMins?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#cluster_size DataDatabricksSqlWarehouse#cluster_size}
  */
  readonly clusterSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#creator_name DataDatabricksSqlWarehouse#creator_name}
  */
  readonly creatorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#data_source_id DataDatabricksSqlWarehouse#data_source_id}
  */
  readonly dataSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#enable_photon DataDatabricksSqlWarehouse#enable_photon}
  */
  readonly enablePhoton?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#enable_serverless_compute DataDatabricksSqlWarehouse#enable_serverless_compute}
  */
  readonly enableServerlessCompute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#id DataDatabricksSqlWarehouse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#instance_profile_arn DataDatabricksSqlWarehouse#instance_profile_arn}
  */
  readonly instanceProfileArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#jdbc_url DataDatabricksSqlWarehouse#jdbc_url}
  */
  readonly jdbcUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#max_num_clusters DataDatabricksSqlWarehouse#max_num_clusters}
  */
  readonly maxNumClusters?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#min_num_clusters DataDatabricksSqlWarehouse#min_num_clusters}
  */
  readonly minNumClusters?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#num_active_sessions DataDatabricksSqlWarehouse#num_active_sessions}
  */
  readonly numActiveSessions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#num_clusters DataDatabricksSqlWarehouse#num_clusters}
  */
  readonly numClusters?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#spot_instance_policy DataDatabricksSqlWarehouse#spot_instance_policy}
  */
  readonly spotInstancePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#state DataDatabricksSqlWarehouse#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#warehouse_type DataDatabricksSqlWarehouse#warehouse_type}
  */
  readonly warehouseType?: string;
  /**
  * channel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#channel DataDatabricksSqlWarehouse#channel}
  */
  readonly channel?: DataDatabricksSqlWarehouseChannel;
  /**
  * health block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#health DataDatabricksSqlWarehouse#health}
  */
  readonly health?: DataDatabricksSqlWarehouseHealth;
  /**
  * odbc_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#odbc_params DataDatabricksSqlWarehouse#odbc_params}
  */
  readonly odbcParams?: DataDatabricksSqlWarehouseOdbcParams;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#tags DataDatabricksSqlWarehouse#tags}
  */
  readonly tags?: DataDatabricksSqlWarehouseTags;
}
export interface DataDatabricksSqlWarehouseChannel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#dbsql_version DataDatabricksSqlWarehouse#dbsql_version}
  */
  readonly dbsqlVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#name DataDatabricksSqlWarehouse#name}
  */
  readonly name?: string;
}

export function dataDatabricksSqlWarehouseChannelToTerraform(struct?: DataDatabricksSqlWarehouseChannelOutputReference | DataDatabricksSqlWarehouseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbsql_version: cdktf.stringToTerraform(struct!.dbsqlVersion),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataDatabricksSqlWarehouseChannelToHclTerraform(struct?: DataDatabricksSqlWarehouseChannelOutputReference | DataDatabricksSqlWarehouseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbsql_version: {
      value: cdktf.stringToHclTerraform(struct!.dbsqlVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSqlWarehouseChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksSqlWarehouseChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbsqlVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbsqlVersion = this._dbsqlVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSqlWarehouseChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbsqlVersion = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbsqlVersion = value.dbsqlVersion;
      this._name = value.name;
    }
  }

  // dbsql_version - computed: false, optional: true, required: false
  private _dbsqlVersion?: string; 
  public get dbsqlVersion() {
    return this.getStringAttribute('dbsql_version');
  }
  public set dbsqlVersion(value: string) {
    this._dbsqlVersion = value;
  }
  public resetDbsqlVersion() {
    this._dbsqlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbsqlVersionInput() {
    return this._dbsqlVersion;
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
export interface DataDatabricksSqlWarehouseHealthFailureReason {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#code DataDatabricksSqlWarehouse#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#parameters DataDatabricksSqlWarehouse#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#type DataDatabricksSqlWarehouse#type}
  */
  readonly type?: string;
}

export function dataDatabricksSqlWarehouseHealthFailureReasonToTerraform(struct?: DataDatabricksSqlWarehouseHealthFailureReasonOutputReference | DataDatabricksSqlWarehouseHealthFailureReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataDatabricksSqlWarehouseHealthFailureReasonToHclTerraform(struct?: DataDatabricksSqlWarehouseHealthFailureReasonOutputReference | DataDatabricksSqlWarehouseHealthFailureReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSqlWarehouseHealthFailureReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksSqlWarehouseHealthFailureReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSqlWarehouseHealthFailureReason | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._parameters = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._parameters = value.parameters;
      this._type = value.type;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataDatabricksSqlWarehouseHealth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#details DataDatabricksSqlWarehouse#details}
  */
  readonly details?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#message DataDatabricksSqlWarehouse#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#status DataDatabricksSqlWarehouse#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#summary DataDatabricksSqlWarehouse#summary}
  */
  readonly summary?: string;
  /**
  * failure_reason block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#failure_reason DataDatabricksSqlWarehouse#failure_reason}
  */
  readonly failureReason?: DataDatabricksSqlWarehouseHealthFailureReason;
}

export function dataDatabricksSqlWarehouseHealthToTerraform(struct?: DataDatabricksSqlWarehouseHealthOutputReference | DataDatabricksSqlWarehouseHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    details: cdktf.stringToTerraform(struct!.details),
    message: cdktf.stringToTerraform(struct!.message),
    status: cdktf.stringToTerraform(struct!.status),
    summary: cdktf.stringToTerraform(struct!.summary),
    failure_reason: dataDatabricksSqlWarehouseHealthFailureReasonToTerraform(struct!.failureReason),
  }
}


export function dataDatabricksSqlWarehouseHealthToHclTerraform(struct?: DataDatabricksSqlWarehouseHealthOutputReference | DataDatabricksSqlWarehouseHealth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    details: {
      value: cdktf.stringToHclTerraform(struct!.details),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_reason: {
      value: dataDatabricksSqlWarehouseHealthFailureReasonToHclTerraform(struct!.failureReason),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksSqlWarehouseHealthFailureReasonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSqlWarehouseHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksSqlWarehouseHealth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._details !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._failureReason?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureReason = this._failureReason?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSqlWarehouseHealth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._details = undefined;
      this._message = undefined;
      this._status = undefined;
      this._summary = undefined;
      this._failureReason.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._details = value.details;
      this._message = value.message;
      this._status = value.status;
      this._summary = value.summary;
      this._failureReason.internalValue = value.failureReason;
    }
  }

  // details - computed: false, optional: true, required: false
  private _details?: string; 
  public get details() {
    return this.getStringAttribute('details');
  }
  public set details(value: string) {
    this._details = value;
  }
  public resetDetails() {
    this._details = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // failure_reason - computed: false, optional: true, required: false
  private _failureReason = new DataDatabricksSqlWarehouseHealthFailureReasonOutputReference(this, "failure_reason");
  public get failureReason() {
    return this._failureReason;
  }
  public putFailureReason(value: DataDatabricksSqlWarehouseHealthFailureReason) {
    this._failureReason.internalValue = value;
  }
  public resetFailureReason() {
    this._failureReason.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReasonInput() {
    return this._failureReason.internalValue;
  }
}
export interface DataDatabricksSqlWarehouseOdbcParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#hostname DataDatabricksSqlWarehouse#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#path DataDatabricksSqlWarehouse#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#port DataDatabricksSqlWarehouse#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#protocol DataDatabricksSqlWarehouse#protocol}
  */
  readonly protocol?: string;
}

export function dataDatabricksSqlWarehouseOdbcParamsToTerraform(struct?: DataDatabricksSqlWarehouseOdbcParamsOutputReference | DataDatabricksSqlWarehouseOdbcParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataDatabricksSqlWarehouseOdbcParamsToHclTerraform(struct?: DataDatabricksSqlWarehouseOdbcParamsOutputReference | DataDatabricksSqlWarehouseOdbcParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSqlWarehouseOdbcParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksSqlWarehouseOdbcParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataDatabricksSqlWarehouseOdbcParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
    }
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface DataDatabricksSqlWarehouseTagsCustomTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#key DataDatabricksSqlWarehouse#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#value DataDatabricksSqlWarehouse#value}
  */
  readonly value?: string;
}

export function dataDatabricksSqlWarehouseTagsCustomTagsToTerraform(struct?: DataDatabricksSqlWarehouseTagsCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataDatabricksSqlWarehouseTagsCustomTagsToHclTerraform(struct?: DataDatabricksSqlWarehouseTagsCustomTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSqlWarehouseTagsCustomTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDatabricksSqlWarehouseTagsCustomTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSqlWarehouseTagsCustomTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataDatabricksSqlWarehouseTagsCustomTagsList extends cdktf.ComplexList {
  public internalValue? : DataDatabricksSqlWarehouseTagsCustomTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataDatabricksSqlWarehouseTagsCustomTagsOutputReference {
    return new DataDatabricksSqlWarehouseTagsCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDatabricksSqlWarehouseTags {
  /**
  * custom_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#custom_tags DataDatabricksSqlWarehouse#custom_tags}
  */
  readonly customTags?: DataDatabricksSqlWarehouseTagsCustomTags[] | cdktf.IResolvable;
}

export function dataDatabricksSqlWarehouseTagsToTerraform(struct?: DataDatabricksSqlWarehouseTagsOutputReference | DataDatabricksSqlWarehouseTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_tags: cdktf.listMapper(dataDatabricksSqlWarehouseTagsCustomTagsToTerraform, true)(struct!.customTags),
  }
}


export function dataDatabricksSqlWarehouseTagsToHclTerraform(struct?: DataDatabricksSqlWarehouseTagsOutputReference | DataDatabricksSqlWarehouseTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_tags: {
      value: cdktf.listMapperHcl(dataDatabricksSqlWarehouseTagsCustomTagsToHclTerraform, true)(struct!.customTags),
      isBlock: true,
      type: "list",
      storageClassType: "DataDatabricksSqlWarehouseTagsCustomTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDatabricksSqlWarehouseTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataDatabricksSqlWarehouseTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTags = this._customTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDatabricksSqlWarehouseTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTags.internalValue = value.customTags;
    }
  }

  // custom_tags - computed: false, optional: true, required: false
  private _customTags = new DataDatabricksSqlWarehouseTagsCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }
  public putCustomTags(value: DataDatabricksSqlWarehouseTagsCustomTags[] | cdktf.IResolvable) {
    this._customTags.internalValue = value;
  }
  public resetCustomTags() {
    this._customTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTagsInput() {
    return this._customTags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse databricks_sql_warehouse}
*/
export class DataDatabricksSqlWarehouse extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_sql_warehouse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDatabricksSqlWarehouse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDatabricksSqlWarehouse to import
  * @param importFromId The id of the existing DataDatabricksSqlWarehouse that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDatabricksSqlWarehouse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_sql_warehouse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.48.1/docs/data-sources/sql_warehouse databricks_sql_warehouse} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatabricksSqlWarehouseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatabricksSqlWarehouseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks_sql_warehouse',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.48.1',
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
    this._autoStopMins = config.autoStopMins;
    this._clusterSize = config.clusterSize;
    this._creatorName = config.creatorName;
    this._dataSourceId = config.dataSourceId;
    this._enablePhoton = config.enablePhoton;
    this._enableServerlessCompute = config.enableServerlessCompute;
    this._id = config.id;
    this._instanceProfileArn = config.instanceProfileArn;
    this._jdbcUrl = config.jdbcUrl;
    this._maxNumClusters = config.maxNumClusters;
    this._minNumClusters = config.minNumClusters;
    this._name = config.name;
    this._numActiveSessions = config.numActiveSessions;
    this._numClusters = config.numClusters;
    this._spotInstancePolicy = config.spotInstancePolicy;
    this._state = config.state;
    this._warehouseType = config.warehouseType;
    this._channel.internalValue = config.channel;
    this._health.internalValue = config.health;
    this._odbcParams.internalValue = config.odbcParams;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_stop_mins - computed: true, optional: true, required: false
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

  // cluster_size - computed: true, optional: true, required: false
  private _clusterSize?: string; 
  public get clusterSize() {
    return this.getStringAttribute('cluster_size');
  }
  public set clusterSize(value: string) {
    this._clusterSize = value;
  }
  public resetClusterSize() {
    this._clusterSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSizeInput() {
    return this._clusterSize;
  }

  // creator_name - computed: true, optional: true, required: false
  private _creatorName?: string; 
  public get creatorName() {
    return this.getStringAttribute('creator_name');
  }
  public set creatorName(value: string) {
    this._creatorName = value;
  }
  public resetCreatorName() {
    this._creatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorNameInput() {
    return this._creatorName;
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

  // enable_photon - computed: true, optional: true, required: false
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

  // enable_serverless_compute - computed: true, optional: true, required: false
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

  // instance_profile_arn - computed: true, optional: true, required: false
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

  // max_num_clusters - computed: true, optional: true, required: false
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

  // min_num_clusters - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // num_active_sessions - computed: true, optional: true, required: false
  private _numActiveSessions?: number; 
  public get numActiveSessions() {
    return this.getNumberAttribute('num_active_sessions');
  }
  public set numActiveSessions(value: number) {
    this._numActiveSessions = value;
  }
  public resetNumActiveSessions() {
    this._numActiveSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numActiveSessionsInput() {
    return this._numActiveSessions;
  }

  // num_clusters - computed: true, optional: true, required: false
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

  // spot_instance_policy - computed: true, optional: true, required: false
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

  // warehouse_type - computed: true, optional: true, required: false
  private _warehouseType?: string; 
  public get warehouseType() {
    return this.getStringAttribute('warehouse_type');
  }
  public set warehouseType(value: string) {
    this._warehouseType = value;
  }
  public resetWarehouseType() {
    this._warehouseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseTypeInput() {
    return this._warehouseType;
  }

  // channel - computed: false, optional: true, required: false
  private _channel = new DataDatabricksSqlWarehouseChannelOutputReference(this, "channel");
  public get channel() {
    return this._channel;
  }
  public putChannel(value: DataDatabricksSqlWarehouseChannel) {
    this._channel.internalValue = value;
  }
  public resetChannel() {
    this._channel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel.internalValue;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataDatabricksSqlWarehouseHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataDatabricksSqlWarehouseHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // odbc_params - computed: false, optional: true, required: false
  private _odbcParams = new DataDatabricksSqlWarehouseOdbcParamsOutputReference(this, "odbc_params");
  public get odbcParams() {
    return this._odbcParams;
  }
  public putOdbcParams(value: DataDatabricksSqlWarehouseOdbcParams) {
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
  private _tags = new DataDatabricksSqlWarehouseTagsOutputReference(this, "tags");
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataDatabricksSqlWarehouseTags) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_stop_mins: cdktf.numberToTerraform(this._autoStopMins),
      cluster_size: cdktf.stringToTerraform(this._clusterSize),
      creator_name: cdktf.stringToTerraform(this._creatorName),
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
      enable_photon: cdktf.booleanToTerraform(this._enablePhoton),
      enable_serverless_compute: cdktf.booleanToTerraform(this._enableServerlessCompute),
      id: cdktf.stringToTerraform(this._id),
      instance_profile_arn: cdktf.stringToTerraform(this._instanceProfileArn),
      jdbc_url: cdktf.stringToTerraform(this._jdbcUrl),
      max_num_clusters: cdktf.numberToTerraform(this._maxNumClusters),
      min_num_clusters: cdktf.numberToTerraform(this._minNumClusters),
      name: cdktf.stringToTerraform(this._name),
      num_active_sessions: cdktf.numberToTerraform(this._numActiveSessions),
      num_clusters: cdktf.numberToTerraform(this._numClusters),
      spot_instance_policy: cdktf.stringToTerraform(this._spotInstancePolicy),
      state: cdktf.stringToTerraform(this._state),
      warehouse_type: cdktf.stringToTerraform(this._warehouseType),
      channel: dataDatabricksSqlWarehouseChannelToTerraform(this._channel.internalValue),
      health: dataDatabricksSqlWarehouseHealthToTerraform(this._health.internalValue),
      odbc_params: dataDatabricksSqlWarehouseOdbcParamsToTerraform(this._odbcParams.internalValue),
      tags: dataDatabricksSqlWarehouseTagsToTerraform(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_stop_mins: {
        value: cdktf.numberToHclTerraform(this._autoStopMins),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_size: {
        value: cdktf.stringToHclTerraform(this._clusterSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creator_name: {
        value: cdktf.stringToHclTerraform(this._creatorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_id: {
        value: cdktf.stringToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_photon: {
        value: cdktf.booleanToHclTerraform(this._enablePhoton),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_serverless_compute: {
        value: cdktf.booleanToHclTerraform(this._enableServerlessCompute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_profile_arn: {
        value: cdktf.stringToHclTerraform(this._instanceProfileArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdbc_url: {
        value: cdktf.stringToHclTerraform(this._jdbcUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_num_clusters: {
        value: cdktf.numberToHclTerraform(this._maxNumClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_num_clusters: {
        value: cdktf.numberToHclTerraform(this._minNumClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_active_sessions: {
        value: cdktf.numberToHclTerraform(this._numActiveSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_clusters: {
        value: cdktf.numberToHclTerraform(this._numClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spot_instance_policy: {
        value: cdktf.stringToHclTerraform(this._spotInstancePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse_type: {
        value: cdktf.stringToHclTerraform(this._warehouseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel: {
        value: dataDatabricksSqlWarehouseChannelToHclTerraform(this._channel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksSqlWarehouseChannelList",
      },
      health: {
        value: dataDatabricksSqlWarehouseHealthToHclTerraform(this._health.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksSqlWarehouseHealthList",
      },
      odbc_params: {
        value: dataDatabricksSqlWarehouseOdbcParamsToHclTerraform(this._odbcParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksSqlWarehouseOdbcParamsList",
      },
      tags: {
        value: dataDatabricksSqlWarehouseTagsToHclTerraform(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDatabricksSqlWarehouseTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
