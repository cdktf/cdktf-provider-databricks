# `dataDatabricksMlflowExperiment` Submodule <a name="`dataDatabricksMlflowExperiment` Submodule" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMlflowExperiment <a name="DataDatabricksMlflowExperiment" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment databricks_mlflow_experiment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmlflowexperiment"

datadatabricksmlflowexperiment.NewDataDatabricksMlflowExperiment(scope Construct, id *string, config DataDatabricksMlflowExperimentConfig) DataDatabricksMlflowExperiment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig">DataDatabricksMlflowExperimentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig">DataDatabricksMlflowExperimentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetArtifactLocation">ResetArtifactLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetExperimentId">ResetExperimentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLastUpdateTime">ResetLastUpdateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLifecycleStage">ResetLifecycleStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArtifactLocation` <a name="ResetArtifactLocation" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetArtifactLocation"></a>

```go
func ResetArtifactLocation()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetExperimentId` <a name="ResetExperimentId" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetExperimentId"></a>

```go
func ResetExperimentId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetId"></a>

```go
func ResetId()
```

##### `ResetLastUpdateTime` <a name="ResetLastUpdateTime" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLastUpdateTime"></a>

```go
func ResetLastUpdateTime()
```

##### `ResetLifecycleStage` <a name="ResetLifecycleStage" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLifecycleStage"></a>

```go
func ResetLifecycleStage()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMlflowExperiment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmlflowexperiment"

datadatabricksmlflowexperiment.DataDatabricksMlflowExperiment_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmlflowexperiment"

datadatabricksmlflowexperiment.DataDatabricksMlflowExperiment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmlflowexperiment"

datadatabricksmlflowexperiment.DataDatabricksMlflowExperiment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmlflowexperiment"

datadatabricksmlflowexperiment.DataDatabricksMlflowExperiment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksMlflowExperiment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksMlflowExperiment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksMlflowExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMlflowExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList">DataDatabricksMlflowExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocationInput">ArtifactLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentIdInput">ExperimentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTimeInput">LastUpdateTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStageInput">LifecycleStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocation">ArtifactLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentId">ExperimentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStage">LifecycleStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tags"></a>

```go
func Tags() DataDatabricksMlflowExperimentTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList">DataDatabricksMlflowExperimentTagsList</a>

---

##### `ArtifactLocationInput`<sup>Optional</sup> <a name="ArtifactLocationInput" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocationInput"></a>

```go
func ArtifactLocationInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `ExperimentIdInput`<sup>Optional</sup> <a name="ExperimentIdInput" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentIdInput"></a>

```go
func ExperimentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LastUpdateTimeInput`<sup>Optional</sup> <a name="LastUpdateTimeInput" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTimeInput"></a>

```go
func LastUpdateTimeInput() *f64
```

- *Type:* *f64

---

##### `LifecycleStageInput`<sup>Optional</sup> <a name="LifecycleStageInput" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStageInput"></a>

```go
func LifecycleStageInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ArtifactLocation`<sup>Required</sup> <a name="ArtifactLocation" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocation"></a>

```go
func ArtifactLocation() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `ExperimentId`<sup>Required</sup> <a name="ExperimentId" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentId"></a>

```go
func ExperimentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdateTime`<sup>Required</sup> <a name="LastUpdateTime" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTime"></a>

```go
func LastUpdateTime() *f64
```

- *Type:* *f64

---

##### `LifecycleStage`<sup>Required</sup> <a name="LifecycleStage" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStage"></a>

```go
func LifecycleStage() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMlflowExperimentConfig <a name="DataDatabricksMlflowExperimentConfig" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmlflowexperiment"

&datadatabricksmlflowexperiment.DataDatabricksMlflowExperimentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactLocation: *string,
	CreationTime: *f64,
	ExperimentId: *string,
	Id: *string,
	LastUpdateTime: *f64,
	LifecycleStage: *string,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.artifactLocation">ArtifactLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.experimentId">ExperimentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lastUpdateTime">LastUpdateTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycleStage">LifecycleStage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.tags">Tags</a></code> | <code>interface{}</code> | tags block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactLocation`<sup>Optional</sup> <a name="ArtifactLocation" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.artifactLocation"></a>

```go
ArtifactLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}.

---

##### `ExperimentId`<sup>Optional</sup> <a name="ExperimentId" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.experimentId"></a>

```go
ExperimentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastUpdateTime`<sup>Optional</sup> <a name="LastUpdateTime" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lastUpdateTime"></a>

```go
LastUpdateTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}.

---

##### `LifecycleStage`<sup>Optional</sup> <a name="LifecycleStage" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycleStage"></a>

```go
LifecycleStage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#tags DataDatabricksMlflowExperiment#tags}

---

### DataDatabricksMlflowExperimentTags <a name="DataDatabricksMlflowExperimentTags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmlflowexperiment"

&datadatabricksmlflowexperiment.DataDatabricksMlflowExperimentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#key DataDatabricksMlflowExperiment#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#value DataDatabricksMlflowExperiment#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#key DataDatabricksMlflowExperiment#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.1/docs/data-sources/mlflow_experiment#value DataDatabricksMlflowExperiment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMlflowExperimentTagsList <a name="DataDatabricksMlflowExperimentTagsList" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmlflowexperiment"

datadatabricksmlflowexperiment.NewDataDatabricksMlflowExperimentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksMlflowExperimentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get"></a>

```go
func Get(index *f64) DataDatabricksMlflowExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksMlflowExperimentTagsOutputReference <a name="DataDatabricksMlflowExperimentTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksmlflowexperiment"

datadatabricksmlflowexperiment.NewDataDatabricksMlflowExperimentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksMlflowExperimentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



