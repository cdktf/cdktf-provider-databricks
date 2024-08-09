// https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VectorSearchIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#endpoint_name VectorSearchIndex#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#id VectorSearchIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#index_type VectorSearchIndex#index_type}
  */
  readonly indexType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#name VectorSearchIndex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#primary_key VectorSearchIndex#primary_key}
  */
  readonly primaryKey: string;
  /**
  * delta_sync_index_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#delta_sync_index_spec VectorSearchIndex#delta_sync_index_spec}
  */
  readonly deltaSyncIndexSpec?: VectorSearchIndexDeltaSyncIndexSpec;
  /**
  * direct_access_index_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#direct_access_index_spec VectorSearchIndex#direct_access_index_spec}
  */
  readonly directAccessIndexSpec?: VectorSearchIndexDirectAccessIndexSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#timeouts VectorSearchIndex#timeouts}
  */
  readonly timeouts?: VectorSearchIndexTimeouts;
}
export interface VectorSearchIndexStatus {
}

export function vectorSearchIndexStatusToTerraform(struct?: VectorSearchIndexStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vectorSearchIndexStatusToHclTerraform(struct?: VectorSearchIndexStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VectorSearchIndexStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VectorSearchIndexStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // index_url - computed: true, optional: false, required: false
  public get indexUrl() {
    return this.getStringAttribute('index_url');
  }

  // indexed_row_count - computed: true, optional: false, required: false
  public get indexedRowCount() {
    return this.getNumberAttribute('indexed_row_count');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // ready - computed: true, optional: false, required: false
  public get ready() {
    return this.getBooleanAttribute('ready');
  }
}

export class VectorSearchIndexStatusList extends cdktf.ComplexList {

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
  public get(index: number): VectorSearchIndexStatusOutputReference {
    return new VectorSearchIndexStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}
  */
  readonly embeddingModelEndpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#name VectorSearchIndex#name}
  */
  readonly name?: string;
}

export function vectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToTerraform(struct?: VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_model_endpoint_name: cdktf.stringToTerraform(struct!.embeddingModelEndpointName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToHclTerraform(struct?: VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_model_endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.embeddingModelEndpointName),
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

export class VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModelEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelEndpointName = this._embeddingModelEndpointName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingModelEndpointName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingModelEndpointName = value.embeddingModelEndpointName;
      this._name = value.name;
    }
  }

  // embedding_model_endpoint_name - computed: false, optional: true, required: false
  private _embeddingModelEndpointName?: string; 
  public get embeddingModelEndpointName() {
    return this.getStringAttribute('embedding_model_endpoint_name');
  }
  public set embeddingModelEndpointName(value: string) {
    this._embeddingModelEndpointName = value;
  }
  public resetEmbeddingModelEndpointName() {
    this._embeddingModelEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelEndpointNameInput() {
    return this._embeddingModelEndpointName;
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

export class VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList extends cdktf.ComplexList {
  public internalValue? : VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable

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
  public get(index: number): VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference {
    return new VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}
  */
  readonly embeddingDimension?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#name VectorSearchIndex#name}
  */
  readonly name?: string;
}

export function vectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToTerraform(struct?: VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_dimension: cdktf.numberToTerraform(struct!.embeddingDimension),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToHclTerraform(struct?: VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_dimension: {
      value: cdktf.numberToHclTerraform(struct!.embeddingDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDimension = this._embeddingDimension;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingDimension = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingDimension = value.embeddingDimension;
      this._name = value.name;
    }
  }

  // embedding_dimension - computed: false, optional: true, required: false
  private _embeddingDimension?: number; 
  public get embeddingDimension() {
    return this.getNumberAttribute('embedding_dimension');
  }
  public set embeddingDimension(value: number) {
    this._embeddingDimension = value;
  }
  public resetEmbeddingDimension() {
    this._embeddingDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDimensionInput() {
    return this._embeddingDimension;
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

export class VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList extends cdktf.ComplexList {
  public internalValue? : VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable

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
  public get(index: number): VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference {
    return new VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VectorSearchIndexDeltaSyncIndexSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#embedding_writeback_table VectorSearchIndex#embedding_writeback_table}
  */
  readonly embeddingWritebackTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#pipeline_type VectorSearchIndex#pipeline_type}
  */
  readonly pipelineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#source_table VectorSearchIndex#source_table}
  */
  readonly sourceTable?: string;
  /**
  * embedding_source_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#embedding_source_columns VectorSearchIndex#embedding_source_columns}
  */
  readonly embeddingSourceColumns?: VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable;
  /**
  * embedding_vector_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#embedding_vector_columns VectorSearchIndex#embedding_vector_columns}
  */
  readonly embeddingVectorColumns?: VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable;
}

export function vectorSearchIndexDeltaSyncIndexSpecToTerraform(struct?: VectorSearchIndexDeltaSyncIndexSpecOutputReference | VectorSearchIndexDeltaSyncIndexSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_writeback_table: cdktf.stringToTerraform(struct!.embeddingWritebackTable),
    pipeline_type: cdktf.stringToTerraform(struct!.pipelineType),
    source_table: cdktf.stringToTerraform(struct!.sourceTable),
    embedding_source_columns: cdktf.listMapper(vectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToTerraform, true)(struct!.embeddingSourceColumns),
    embedding_vector_columns: cdktf.listMapper(vectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToTerraform, true)(struct!.embeddingVectorColumns),
  }
}


export function vectorSearchIndexDeltaSyncIndexSpecToHclTerraform(struct?: VectorSearchIndexDeltaSyncIndexSpecOutputReference | VectorSearchIndexDeltaSyncIndexSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_writeback_table: {
      value: cdktf.stringToHclTerraform(struct!.embeddingWritebackTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_type: {
      value: cdktf.stringToHclTerraform(struct!.pipelineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_table: {
      value: cdktf.stringToHclTerraform(struct!.sourceTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_source_columns: {
      value: cdktf.listMapperHcl(vectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsToHclTerraform, true)(struct!.embeddingSourceColumns),
      isBlock: true,
      type: "list",
      storageClassType: "VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList",
    },
    embedding_vector_columns: {
      value: cdktf.listMapperHcl(vectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsToHclTerraform, true)(struct!.embeddingVectorColumns),
      isBlock: true,
      type: "list",
      storageClassType: "VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VectorSearchIndexDeltaSyncIndexSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VectorSearchIndexDeltaSyncIndexSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingWritebackTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingWritebackTable = this._embeddingWritebackTable;
    }
    if (this._pipelineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineType = this._pipelineType;
    }
    if (this._sourceTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTable = this._sourceTable;
    }
    if (this._embeddingSourceColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingSourceColumns = this._embeddingSourceColumns?.internalValue;
    }
    if (this._embeddingVectorColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingVectorColumns = this._embeddingVectorColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexDeltaSyncIndexSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._embeddingWritebackTable = undefined;
      this._pipelineType = undefined;
      this._sourceTable = undefined;
      this._embeddingSourceColumns.internalValue = undefined;
      this._embeddingVectorColumns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._embeddingWritebackTable = value.embeddingWritebackTable;
      this._pipelineType = value.pipelineType;
      this._sourceTable = value.sourceTable;
      this._embeddingSourceColumns.internalValue = value.embeddingSourceColumns;
      this._embeddingVectorColumns.internalValue = value.embeddingVectorColumns;
    }
  }

  // embedding_writeback_table - computed: false, optional: true, required: false
  private _embeddingWritebackTable?: string; 
  public get embeddingWritebackTable() {
    return this.getStringAttribute('embedding_writeback_table');
  }
  public set embeddingWritebackTable(value: string) {
    this._embeddingWritebackTable = value;
  }
  public resetEmbeddingWritebackTable() {
    this._embeddingWritebackTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingWritebackTableInput() {
    return this._embeddingWritebackTable;
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // pipeline_type - computed: false, optional: true, required: false
  private _pipelineType?: string; 
  public get pipelineType() {
    return this.getStringAttribute('pipeline_type');
  }
  public set pipelineType(value: string) {
    this._pipelineType = value;
  }
  public resetPipelineType() {
    this._pipelineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTypeInput() {
    return this._pipelineType;
  }

  // source_table - computed: false, optional: true, required: false
  private _sourceTable?: string; 
  public get sourceTable() {
    return this.getStringAttribute('source_table');
  }
  public set sourceTable(value: string) {
    this._sourceTable = value;
  }
  public resetSourceTable() {
    this._sourceTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableInput() {
    return this._sourceTable;
  }

  // embedding_source_columns - computed: false, optional: true, required: false
  private _embeddingSourceColumns = new VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumnsList(this, "embedding_source_columns", false);
  public get embeddingSourceColumns() {
    return this._embeddingSourceColumns;
  }
  public putEmbeddingSourceColumns(value: VectorSearchIndexDeltaSyncIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable) {
    this._embeddingSourceColumns.internalValue = value;
  }
  public resetEmbeddingSourceColumns() {
    this._embeddingSourceColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingSourceColumnsInput() {
    return this._embeddingSourceColumns.internalValue;
  }

  // embedding_vector_columns - computed: false, optional: true, required: false
  private _embeddingVectorColumns = new VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumnsList(this, "embedding_vector_columns", false);
  public get embeddingVectorColumns() {
    return this._embeddingVectorColumns;
  }
  public putEmbeddingVectorColumns(value: VectorSearchIndexDeltaSyncIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable) {
    this._embeddingVectorColumns.internalValue = value;
  }
  public resetEmbeddingVectorColumns() {
    this._embeddingVectorColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingVectorColumnsInput() {
    return this._embeddingVectorColumns.internalValue;
  }
}
export interface VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#embedding_model_endpoint_name VectorSearchIndex#embedding_model_endpoint_name}
  */
  readonly embeddingModelEndpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#name VectorSearchIndex#name}
  */
  readonly name?: string;
}

export function vectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToTerraform(struct?: VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_model_endpoint_name: cdktf.stringToTerraform(struct!.embeddingModelEndpointName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToHclTerraform(struct?: VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_model_endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.embeddingModelEndpointName),
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

export class VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingModelEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingModelEndpointName = this._embeddingModelEndpointName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingModelEndpointName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingModelEndpointName = value.embeddingModelEndpointName;
      this._name = value.name;
    }
  }

  // embedding_model_endpoint_name - computed: false, optional: true, required: false
  private _embeddingModelEndpointName?: string; 
  public get embeddingModelEndpointName() {
    return this.getStringAttribute('embedding_model_endpoint_name');
  }
  public set embeddingModelEndpointName(value: string) {
    this._embeddingModelEndpointName = value;
  }
  public resetEmbeddingModelEndpointName() {
    this._embeddingModelEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingModelEndpointNameInput() {
    return this._embeddingModelEndpointName;
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

export class VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList extends cdktf.ComplexList {
  public internalValue? : VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable

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
  public get(index: number): VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference {
    return new VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#embedding_dimension VectorSearchIndex#embedding_dimension}
  */
  readonly embeddingDimension?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#name VectorSearchIndex#name}
  */
  readonly name?: string;
}

export function vectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToTerraform(struct?: VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    embedding_dimension: cdktf.numberToTerraform(struct!.embeddingDimension),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function vectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToHclTerraform(struct?: VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    embedding_dimension: {
      value: cdktf.numberToHclTerraform(struct!.embeddingDimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._embeddingDimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingDimension = this._embeddingDimension;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._embeddingDimension = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._embeddingDimension = value.embeddingDimension;
      this._name = value.name;
    }
  }

  // embedding_dimension - computed: false, optional: true, required: false
  private _embeddingDimension?: number; 
  public get embeddingDimension() {
    return this.getNumberAttribute('embedding_dimension');
  }
  public set embeddingDimension(value: number) {
    this._embeddingDimension = value;
  }
  public resetEmbeddingDimension() {
    this._embeddingDimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingDimensionInput() {
    return this._embeddingDimension;
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

export class VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList extends cdktf.ComplexList {
  public internalValue? : VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable

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
  public get(index: number): VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference {
    return new VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VectorSearchIndexDirectAccessIndexSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#schema_json VectorSearchIndex#schema_json}
  */
  readonly schemaJson?: string;
  /**
  * embedding_source_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#embedding_source_columns VectorSearchIndex#embedding_source_columns}
  */
  readonly embeddingSourceColumns?: VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable;
  /**
  * embedding_vector_columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#embedding_vector_columns VectorSearchIndex#embedding_vector_columns}
  */
  readonly embeddingVectorColumns?: VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable;
}

export function vectorSearchIndexDirectAccessIndexSpecToTerraform(struct?: VectorSearchIndexDirectAccessIndexSpecOutputReference | VectorSearchIndexDirectAccessIndexSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_json: cdktf.stringToTerraform(struct!.schemaJson),
    embedding_source_columns: cdktf.listMapper(vectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToTerraform, true)(struct!.embeddingSourceColumns),
    embedding_vector_columns: cdktf.listMapper(vectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToTerraform, true)(struct!.embeddingVectorColumns),
  }
}


export function vectorSearchIndexDirectAccessIndexSpecToHclTerraform(struct?: VectorSearchIndexDirectAccessIndexSpecOutputReference | VectorSearchIndexDirectAccessIndexSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_json: {
      value: cdktf.stringToHclTerraform(struct!.schemaJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    embedding_source_columns: {
      value: cdktf.listMapperHcl(vectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsToHclTerraform, true)(struct!.embeddingSourceColumns),
      isBlock: true,
      type: "list",
      storageClassType: "VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList",
    },
    embedding_vector_columns: {
      value: cdktf.listMapperHcl(vectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsToHclTerraform, true)(struct!.embeddingVectorColumns),
      isBlock: true,
      type: "list",
      storageClassType: "VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VectorSearchIndexDirectAccessIndexSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VectorSearchIndexDirectAccessIndexSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaJson = this._schemaJson;
    }
    if (this._embeddingSourceColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingSourceColumns = this._embeddingSourceColumns?.internalValue;
    }
    if (this._embeddingVectorColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.embeddingVectorColumns = this._embeddingVectorColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexDirectAccessIndexSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaJson = undefined;
      this._embeddingSourceColumns.internalValue = undefined;
      this._embeddingVectorColumns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaJson = value.schemaJson;
      this._embeddingSourceColumns.internalValue = value.embeddingSourceColumns;
      this._embeddingVectorColumns.internalValue = value.embeddingVectorColumns;
    }
  }

  // schema_json - computed: false, optional: true, required: false
  private _schemaJson?: string; 
  public get schemaJson() {
    return this.getStringAttribute('schema_json');
  }
  public set schemaJson(value: string) {
    this._schemaJson = value;
  }
  public resetSchemaJson() {
    this._schemaJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaJsonInput() {
    return this._schemaJson;
  }

  // embedding_source_columns - computed: false, optional: true, required: false
  private _embeddingSourceColumns = new VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumnsList(this, "embedding_source_columns", false);
  public get embeddingSourceColumns() {
    return this._embeddingSourceColumns;
  }
  public putEmbeddingSourceColumns(value: VectorSearchIndexDirectAccessIndexSpecEmbeddingSourceColumns[] | cdktf.IResolvable) {
    this._embeddingSourceColumns.internalValue = value;
  }
  public resetEmbeddingSourceColumns() {
    this._embeddingSourceColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingSourceColumnsInput() {
    return this._embeddingSourceColumns.internalValue;
  }

  // embedding_vector_columns - computed: false, optional: true, required: false
  private _embeddingVectorColumns = new VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumnsList(this, "embedding_vector_columns", false);
  public get embeddingVectorColumns() {
    return this._embeddingVectorColumns;
  }
  public putEmbeddingVectorColumns(value: VectorSearchIndexDirectAccessIndexSpecEmbeddingVectorColumns[] | cdktf.IResolvable) {
    this._embeddingVectorColumns.internalValue = value;
  }
  public resetEmbeddingVectorColumns() {
    this._embeddingVectorColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embeddingVectorColumnsInput() {
    return this._embeddingVectorColumns.internalValue;
  }
}
export interface VectorSearchIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#create VectorSearchIndex#create}
  */
  readonly create?: string;
}

export function vectorSearchIndexTimeoutsToTerraform(struct?: VectorSearchIndexTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function vectorSearchIndexTimeoutsToHclTerraform(struct?: VectorSearchIndexTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VectorSearchIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VectorSearchIndexTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VectorSearchIndexTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index databricks_vector_search_index}
*/
export class VectorSearchIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks_vector_search_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VectorSearchIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VectorSearchIndex to import
  * @param importFromId The id of the existing VectorSearchIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VectorSearchIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "databricks_vector_search_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/databricks/databricks/1.49.1/docs/resources/vector_search_index databricks_vector_search_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VectorSearchIndexConfig
  */
  public constructor(scope: Construct, id: string, config: VectorSearchIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'databricks_vector_search_index',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.49.1',
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
    this._endpointName = config.endpointName;
    this._id = config.id;
    this._indexType = config.indexType;
    this._name = config.name;
    this._primaryKey = config.primaryKey;
    this._deltaSyncIndexSpec.internalValue = config.deltaSyncIndexSpec;
    this._directAccessIndexSpec.internalValue = config.directAccessIndexSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
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

  // index_type - computed: false, optional: false, required: true
  private _indexType?: string; 
  public get indexType() {
    return this.getStringAttribute('index_type');
  }
  public set indexType(value: string) {
    this._indexType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTypeInput() {
    return this._indexType;
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

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // status - computed: true, optional: false, required: false
  private _status = new VectorSearchIndexStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // delta_sync_index_spec - computed: false, optional: true, required: false
  private _deltaSyncIndexSpec = new VectorSearchIndexDeltaSyncIndexSpecOutputReference(this, "delta_sync_index_spec");
  public get deltaSyncIndexSpec() {
    return this._deltaSyncIndexSpec;
  }
  public putDeltaSyncIndexSpec(value: VectorSearchIndexDeltaSyncIndexSpec) {
    this._deltaSyncIndexSpec.internalValue = value;
  }
  public resetDeltaSyncIndexSpec() {
    this._deltaSyncIndexSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSyncIndexSpecInput() {
    return this._deltaSyncIndexSpec.internalValue;
  }

  // direct_access_index_spec - computed: false, optional: true, required: false
  private _directAccessIndexSpec = new VectorSearchIndexDirectAccessIndexSpecOutputReference(this, "direct_access_index_spec");
  public get directAccessIndexSpec() {
    return this._directAccessIndexSpec;
  }
  public putDirectAccessIndexSpec(value: VectorSearchIndexDirectAccessIndexSpec) {
    this._directAccessIndexSpec.internalValue = value;
  }
  public resetDirectAccessIndexSpec() {
    this._directAccessIndexSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directAccessIndexSpecInput() {
    return this._directAccessIndexSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VectorSearchIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VectorSearchIndexTimeouts) {
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
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      id: cdktf.stringToTerraform(this._id),
      index_type: cdktf.stringToTerraform(this._indexType),
      name: cdktf.stringToTerraform(this._name),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      delta_sync_index_spec: vectorSearchIndexDeltaSyncIndexSpecToTerraform(this._deltaSyncIndexSpec.internalValue),
      direct_access_index_spec: vectorSearchIndexDirectAccessIndexSpecToTerraform(this._directAccessIndexSpec.internalValue),
      timeouts: vectorSearchIndexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_name: {
        value: cdktf.stringToHclTerraform(this._endpointName),
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
      index_type: {
        value: cdktf.stringToHclTerraform(this._indexType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delta_sync_index_spec: {
        value: vectorSearchIndexDeltaSyncIndexSpecToHclTerraform(this._deltaSyncIndexSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VectorSearchIndexDeltaSyncIndexSpecList",
      },
      direct_access_index_spec: {
        value: vectorSearchIndexDirectAccessIndexSpecToHclTerraform(this._directAccessIndexSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VectorSearchIndexDirectAccessIndexSpecList",
      },
      timeouts: {
        value: vectorSearchIndexTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VectorSearchIndexTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
