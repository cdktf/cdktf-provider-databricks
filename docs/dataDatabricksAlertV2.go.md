# `dataDatabricksAlertV2` Submodule <a name="`dataDatabricksAlertV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksAlertV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertV2 <a name="DataDatabricksAlertV2" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2 databricks_alert_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2(scope Construct, id *string, config DataDatabricksAlertV2Config) DataDatabricksAlertV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config">DataDatabricksAlertV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config">DataDatabricksAlertV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation">PutEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putRunAs">PutRunAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomDescription">ResetCustomDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomSummary">ResetCustomSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetEvaluation">ResetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetParentPath">ResetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetQueryText">ResetQueryText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAs">ResetRunAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAsUserName">ResetRunAsUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEvaluation` <a name="PutEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation"></a>

```go
func PutEvaluation(value DataDatabricksAlertV2Evaluation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

---

##### `PutRunAs` <a name="PutRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putRunAs"></a>

```go
func PutRunAs(value DataDatabricksAlertV2RunAs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putRunAs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule"></a>

```go
func PutSchedule(value DataDatabricksAlertV2Schedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

---

##### `ResetCustomDescription` <a name="ResetCustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomDescription"></a>

```go
func ResetCustomDescription()
```

##### `ResetCustomSummary` <a name="ResetCustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomSummary"></a>

```go
func ResetCustomSummary()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEvaluation` <a name="ResetEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetEvaluation"></a>

```go
func ResetEvaluation()
```

##### `ResetParentPath` <a name="ResetParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetParentPath"></a>

```go
func ResetParentPath()
```

##### `ResetQueryText` <a name="ResetQueryText" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetQueryText"></a>

```go
func ResetQueryText()
```

##### `ResetRunAs` <a name="ResetRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAs"></a>

```go
func ResetRunAs()
```

##### `ResetRunAsUserName` <a name="ResetRunAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAsUserName"></a>

```go
func ResetRunAsUserName()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetWarehouseId"></a>

```go
func ResetWarehouseId()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAlertV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.DataDatabricksAlertV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.DataDatabricksAlertV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.DataDatabricksAlertV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.DataDatabricksAlertV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksAlertV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAlertV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAlertV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAlertV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.effectiveRunAs">EffectiveRunAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference">DataDatabricksAlertV2EffectiveRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference">DataDatabricksAlertV2EvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.ownerUserName">OwnerUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAs">RunAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference">DataDatabricksAlertV2RunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference">DataDatabricksAlertV2ScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescriptionInput">CustomDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummaryInput">CustomSummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluationInput">EvaluationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPathInput">ParentPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryTextInput">QueryTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsInput">RunAsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserNameInput">RunAsUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescription">CustomDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummary">CustomSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPath">ParentPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryText">QueryText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserName">RunAsUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveRunAs`<sup>Required</sup> <a name="EffectiveRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.effectiveRunAs"></a>

```go
func EffectiveRunAs() DataDatabricksAlertV2EffectiveRunAsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference">DataDatabricksAlertV2EffectiveRunAsOutputReference</a>

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluation"></a>

```go
func Evaluation() DataDatabricksAlertV2EvaluationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference">DataDatabricksAlertV2EvaluationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.ownerUserName"></a>

```go
func OwnerUserName() *string
```

- *Type:* *string

---

##### `RunAs`<sup>Required</sup> <a name="RunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAs"></a>

```go
func RunAs() DataDatabricksAlertV2RunAsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference">DataDatabricksAlertV2RunAsOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.schedule"></a>

```go
func Schedule() DataDatabricksAlertV2ScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference">DataDatabricksAlertV2ScheduleOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CustomDescriptionInput`<sup>Optional</sup> <a name="CustomDescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescriptionInput"></a>

```go
func CustomDescriptionInput() *string
```

- *Type:* *string

---

##### `CustomSummaryInput`<sup>Optional</sup> <a name="CustomSummaryInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummaryInput"></a>

```go
func CustomSummaryInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EvaluationInput`<sup>Optional</sup> <a name="EvaluationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluationInput"></a>

```go
func EvaluationInput() interface{}
```

- *Type:* interface{}

---

##### `ParentPathInput`<sup>Optional</sup> <a name="ParentPathInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPathInput"></a>

```go
func ParentPathInput() *string
```

- *Type:* *string

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryTextInput"></a>

```go
func QueryTextInput() *string
```

- *Type:* *string

---

##### `RunAsInput`<sup>Optional</sup> <a name="RunAsInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsInput"></a>

```go
func RunAsInput() interface{}
```

- *Type:* interface{}

---

##### `RunAsUserNameInput`<sup>Optional</sup> <a name="RunAsUserNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserNameInput"></a>

```go
func RunAsUserNameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `CustomDescription`<sup>Required</sup> <a name="CustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescription"></a>

```go
func CustomDescription() *string
```

- *Type:* *string

---

##### `CustomSummary`<sup>Required</sup> <a name="CustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummary"></a>

```go
func CustomSummary() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPath"></a>

```go
func ParentPath() *string
```

- *Type:* *string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryText"></a>

```go
func QueryText() *string
```

- *Type:* *string

---

##### `RunAsUserName`<sup>Required</sup> <a name="RunAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserName"></a>

```go
func RunAsUserName() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAlertV2Config <a name="DataDatabricksAlertV2Config" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomDescription: *string,
	CustomSummary: *string,
	DisplayName: *string,
	Evaluation: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation,
	ParentPath: *string,
	QueryText: *string,
	RunAs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs,
	RunAsUserName: *string,
	Schedule: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule,
	WarehouseId: *string,
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customDescription">CustomDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#custom_description DataDatabricksAlertV2#custom_description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customSummary">CustomSummary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#custom_summary DataDatabricksAlertV2#custom_summary}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#display_name DataDatabricksAlertV2#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#evaluation DataDatabricksAlertV2#evaluation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.parentPath">ParentPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#parent_path DataDatabricksAlertV2#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.queryText">QueryText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#query_text DataDatabricksAlertV2#query_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAs">RunAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#run_as DataDatabricksAlertV2#run_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAsUserName">RunAsUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#run_as_user_name DataDatabricksAlertV2#run_as_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#schedule DataDatabricksAlertV2#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#warehouse_id DataDatabricksAlertV2#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#workspace_id DataDatabricksAlertV2#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomDescription`<sup>Optional</sup> <a name="CustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customDescription"></a>

```go
CustomDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#custom_description DataDatabricksAlertV2#custom_description}.

---

##### `CustomSummary`<sup>Optional</sup> <a name="CustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customSummary"></a>

```go
CustomSummary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#custom_summary DataDatabricksAlertV2#custom_summary}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#display_name DataDatabricksAlertV2#display_name}.

---

##### `Evaluation`<sup>Optional</sup> <a name="Evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.evaluation"></a>

```go
Evaluation DataDatabricksAlertV2Evaluation
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#evaluation DataDatabricksAlertV2#evaluation}.

---

##### `ParentPath`<sup>Optional</sup> <a name="ParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.parentPath"></a>

```go
ParentPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#parent_path DataDatabricksAlertV2#parent_path}.

---

##### `QueryText`<sup>Optional</sup> <a name="QueryText" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.queryText"></a>

```go
QueryText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#query_text DataDatabricksAlertV2#query_text}.

---

##### `RunAs`<sup>Optional</sup> <a name="RunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAs"></a>

```go
RunAs DataDatabricksAlertV2RunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#run_as DataDatabricksAlertV2#run_as}.

---

##### `RunAsUserName`<sup>Optional</sup> <a name="RunAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAsUserName"></a>

```go
RunAsUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#run_as_user_name DataDatabricksAlertV2#run_as_user_name}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.schedule"></a>

```go
Schedule DataDatabricksAlertV2Schedule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#schedule DataDatabricksAlertV2#schedule}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#warehouse_id DataDatabricksAlertV2#warehouse_id}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#workspace_id DataDatabricksAlertV2#workspace_id}.

---

### DataDatabricksAlertV2EffectiveRunAs <a name="DataDatabricksAlertV2EffectiveRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2EffectiveRunAs {
	ServicePrincipalName: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}. |

---

##### `ServicePrincipalName`<sup>Optional</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.servicePrincipalName"></a>

```go
ServicePrincipalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}.

---

### DataDatabricksAlertV2Evaluation <a name="DataDatabricksAlertV2Evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2Evaluation {
	ComparisonOperator: *string,
	EmptyResultState: *string,
	Notification: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification,
	Source: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource,
	Threshold: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.emptyResultState">EmptyResultState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}.

---

##### `EmptyResultState`<sup>Optional</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.emptyResultState"></a>

```go
EmptyResultState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.notification"></a>

```go
Notification DataDatabricksAlertV2EvaluationNotification
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.source"></a>

```go
Source DataDatabricksAlertV2EvaluationSource
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.threshold"></a>

```go
Threshold DataDatabricksAlertV2EvaluationThreshold
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}.

---

### DataDatabricksAlertV2EvaluationNotification <a name="DataDatabricksAlertV2EvaluationNotification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2EvaluationNotification {
	NotifyOnOk: interface{},
	RetriggerSeconds: *f64,
	Subscriptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.notifyOnOk">NotifyOnOk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.retriggerSeconds">RetriggerSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.subscriptions">Subscriptions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}. |

---

##### `NotifyOnOk`<sup>Optional</sup> <a name="NotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.notifyOnOk"></a>

```go
NotifyOnOk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}.

---

##### `RetriggerSeconds`<sup>Optional</sup> <a name="RetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.retriggerSeconds"></a>

```go
RetriggerSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}.

---

##### `Subscriptions`<sup>Optional</sup> <a name="Subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.subscriptions"></a>

```go
Subscriptions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}.

---

### DataDatabricksAlertV2EvaluationNotificationSubscriptions <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2EvaluationNotificationSubscriptions {
	DestinationId: *string,
	UserEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.destinationId">DestinationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#destination_id DataDatabricksAlertV2#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.userEmail">UserEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#user_email DataDatabricksAlertV2#user_email}. |

---

##### `DestinationId`<sup>Optional</sup> <a name="DestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.destinationId"></a>

```go
DestinationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#destination_id DataDatabricksAlertV2#destination_id}.

---

##### `UserEmail`<sup>Optional</sup> <a name="UserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.userEmail"></a>

```go
UserEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#user_email DataDatabricksAlertV2#user_email}.

---

### DataDatabricksAlertV2EvaluationSource <a name="DataDatabricksAlertV2EvaluationSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2EvaluationSource {
	Aggregation: *string,
	Display: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.aggregation">Aggregation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.display">Display</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.display"></a>

```go
Display *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

### DataDatabricksAlertV2EvaluationThreshold <a name="DataDatabricksAlertV2EvaluationThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2EvaluationThreshold {
	Column: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn,
	Value: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}. |

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.column"></a>

```go
Column DataDatabricksAlertV2EvaluationThresholdColumn
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.value"></a>

```go
Value DataDatabricksAlertV2EvaluationThresholdValue
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}.

---

### DataDatabricksAlertV2EvaluationThresholdColumn <a name="DataDatabricksAlertV2EvaluationThresholdColumn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2EvaluationThresholdColumn {
	Aggregation: *string,
	Display: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.aggregation">Aggregation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.display">Display</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.display"></a>

```go
Display *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

### DataDatabricksAlertV2EvaluationThresholdValue <a name="DataDatabricksAlertV2EvaluationThresholdValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2EvaluationThresholdValue {
	BoolValue: interface{},
	DoubleValue: *f64,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.doubleValue"></a>

```go
DoubleValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}.

---

### DataDatabricksAlertV2RunAs <a name="DataDatabricksAlertV2RunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2RunAs {
	ServicePrincipalName: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}. |

---

##### `ServicePrincipalName`<sup>Optional</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.servicePrincipalName"></a>

```go
ServicePrincipalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}.

---

### DataDatabricksAlertV2Schedule <a name="DataDatabricksAlertV2Schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

&datadatabricksalertv2.DataDatabricksAlertV2Schedule {
	PauseStatus: *string,
	QuartzCronSchedule: *string,
	TimezoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.pauseStatus">PauseStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}. |

---

##### `PauseStatus`<sup>Optional</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.pauseStatus"></a>

```go
PauseStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}.

---

##### `QuartzCronSchedule`<sup>Optional</sup> <a name="QuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.quartzCronSchedule"></a>

```go
QuartzCronSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}.

---

##### `TimezoneId`<sup>Optional</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.timezoneId"></a>

```go
TimezoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertV2EffectiveRunAsOutputReference <a name="DataDatabricksAlertV2EffectiveRunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2EffectiveRunAsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertV2EffectiveRunAsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetServicePrincipalName">ResetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServicePrincipalName` <a name="ResetServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetServicePrincipalName"></a>

```go
func ResetServicePrincipalName()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetUserName"></a>

```go
func ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs">DataDatabricksAlertV2EffectiveRunAs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalNameInput"></a>

```go
func ServicePrincipalNameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalName"></a>

```go
func ServicePrincipalName() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAlertV2EffectiveRunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs">DataDatabricksAlertV2EffectiveRunAs</a>

---


### DataDatabricksAlertV2EvaluationNotificationOutputReference <a name="DataDatabricksAlertV2EvaluationNotificationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2EvaluationNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertV2EvaluationNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions">PutSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetNotifyOnOk">ResetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds">ResetRetriggerSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetSubscriptions">ResetSubscriptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubscriptions` <a name="PutSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions"></a>

```go
func PutSubscriptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNotifyOnOk` <a name="ResetNotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```go
func ResetNotifyOnOk()
```

##### `ResetRetriggerSeconds` <a name="ResetRetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```go
func ResetRetriggerSeconds()
```

##### `ResetSubscriptions` <a name="ResetSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetSubscriptions"></a>

```go
func ResetSubscriptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptions">Subscriptions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList">DataDatabricksAlertV2EvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput">NotifyOnOkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput">RetriggerSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptionsInput">SubscriptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOk">NotifyOnOk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSeconds">RetriggerSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptions"></a>

```go
func Subscriptions() DataDatabricksAlertV2EvaluationNotificationSubscriptionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList">DataDatabricksAlertV2EvaluationNotificationSubscriptionsList</a>

---

##### `NotifyOnOkInput`<sup>Optional</sup> <a name="NotifyOnOkInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```go
func NotifyOnOkInput() interface{}
```

- *Type:* interface{}

---

##### `RetriggerSecondsInput`<sup>Optional</sup> <a name="RetriggerSecondsInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```go
func RetriggerSecondsInput() *f64
```

- *Type:* *f64

---

##### `SubscriptionsInput`<sup>Optional</sup> <a name="SubscriptionsInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```go
func SubscriptionsInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnOk`<sup>Required</sup> <a name="NotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOk"></a>

```go
func NotifyOnOk() interface{}
```

- *Type:* interface{}

---

##### `RetriggerSeconds`<sup>Required</sup> <a name="RetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```go
func RetriggerSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertV2EvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptionsList" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2EvaluationNotificationSubscriptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAlertV2EvaluationNotificationSubscriptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get"></a>

```go
func Get(index *f64) DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId">ResetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail">ResetUserEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationId` <a name="ResetDestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```go
func ResetDestinationId()
```

##### `ResetUserEmail` <a name="ResetUserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```go
func ResetUserEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">DestinationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId">DestinationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail">UserEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIdInput`<sup>Optional</sup> <a name="DestinationIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```go
func DestinationIdInput() *string
```

- *Type:* *string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```go
func UserEmailInput() *string
```

- *Type:* *string

---

##### `DestinationId`<sup>Required</sup> <a name="DestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```go
func DestinationId() *string
```

- *Type:* *string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```go
func UserEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertV2EvaluationOutputReference <a name="DataDatabricksAlertV2EvaluationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2EvaluationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertV2EvaluationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetEmptyResultState">ResetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification"></a>

```go
func PutNotification(value DataDatabricksAlertV2EvaluationNotification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource"></a>

```go
func PutSource(value DataDatabricksAlertV2EvaluationSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

---

##### `PutThreshold` <a name="PutThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold"></a>

```go
func PutThreshold(value DataDatabricksAlertV2EvaluationThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

---

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetComparisonOperator"></a>

```go
func ResetComparisonOperator()
```

##### `ResetEmptyResultState` <a name="ResetEmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetEmptyResultState"></a>

```go
func ResetEmptyResultState()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetNotification"></a>

```go
func ResetNotification()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.lastEvaluatedAt">LastEvaluatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference">DataDatabricksAlertV2EvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference">DataDatabricksAlertV2EvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference">DataDatabricksAlertV2EvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultStateInput">EmptyResultStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultState">EmptyResultState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastEvaluatedAt`<sup>Required</sup> <a name="LastEvaluatedAt" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.lastEvaluatedAt"></a>

```go
func LastEvaluatedAt() *string
```

- *Type:* *string

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notification"></a>

```go
func Notification() DataDatabricksAlertV2EvaluationNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference">DataDatabricksAlertV2EvaluationNotificationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.source"></a>

```go
func Source() DataDatabricksAlertV2EvaluationSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference">DataDatabricksAlertV2EvaluationSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.threshold"></a>

```go
func Threshold() DataDatabricksAlertV2EvaluationThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference">DataDatabricksAlertV2EvaluationThresholdOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `EmptyResultStateInput`<sup>Optional</sup> <a name="EmptyResultStateInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultStateInput"></a>

```go
func EmptyResultStateInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() interface{}
```

- *Type:* interface{}

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `EmptyResultState`<sup>Required</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultState"></a>

```go
func EmptyResultState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertV2EvaluationSourceOutputReference <a name="DataDatabricksAlertV2EvaluationSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2EvaluationSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertV2EvaluationSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetAggregation"></a>

```go
func ResetAggregation()
```

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetDisplay"></a>

```go
func ResetDisplay()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.displayInput">DisplayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.displayInput"></a>

```go
func DisplayInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertV2EvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdColumnOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2EvaluationThresholdColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertV2EvaluationThresholdColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetAggregation"></a>

```go
func ResetAggregation()
```

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetDisplay"></a>

```go
func ResetDisplay()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.displayInput">DisplayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.displayInput"></a>

```go
func DisplayInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertV2EvaluationThresholdOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2EvaluationThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertV2EvaluationThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn"></a>

```go
func PutColumn(value DataDatabricksAlertV2EvaluationThresholdColumn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

---

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue"></a>

```go
func PutValue(value DataDatabricksAlertV2EvaluationThresholdValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetColumn"></a>

```go
func ResetColumn()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference">DataDatabricksAlertV2EvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference">DataDatabricksAlertV2EvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.columnInput">ColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.column"></a>

```go
func Column() DataDatabricksAlertV2EvaluationThresholdColumnOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference">DataDatabricksAlertV2EvaluationThresholdColumnOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.value"></a>

```go
func Value() DataDatabricksAlertV2EvaluationThresholdValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference">DataDatabricksAlertV2EvaluationThresholdValueOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.columnInput"></a>

```go
func ColumnInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertV2EvaluationThresholdValueOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2EvaluationThresholdValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertV2EvaluationThresholdValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```go
func ResetDoubleValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```go
func DoubleValueInput() *f64
```

- *Type:* *f64

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertV2RunAsOutputReference <a name="DataDatabricksAlertV2RunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2RunAsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertV2RunAsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetServicePrincipalName">ResetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServicePrincipalName` <a name="ResetServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetServicePrincipalName"></a>

```go
func ResetServicePrincipalName()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetUserName"></a>

```go
func ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalNameInput"></a>

```go
func ServicePrincipalNameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalName"></a>

```go
func ServicePrincipalName() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertV2ScheduleOutputReference <a name="DataDatabricksAlertV2ScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertv2"

datadatabricksalertv2.NewDataDatabricksAlertV2ScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertV2ScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetPauseStatus">ResetPauseStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetQuartzCronSchedule">ResetQuartzCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetTimezoneId">ResetTimezoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPauseStatus` <a name="ResetPauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetPauseStatus"></a>

```go
func ResetPauseStatus()
```

##### `ResetQuartzCronSchedule` <a name="ResetQuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetQuartzCronSchedule"></a>

```go
func ResetQuartzCronSchedule()
```

##### `ResetTimezoneId` <a name="ResetTimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetTimezoneId"></a>

```go
func ResetTimezoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatusInput">PauseStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronScheduleInput">QuartzCronScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PauseStatusInput`<sup>Optional</sup> <a name="PauseStatusInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatusInput"></a>

```go
func PauseStatusInput() *string
```

- *Type:* *string

---

##### `QuartzCronScheduleInput`<sup>Optional</sup> <a name="QuartzCronScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronScheduleInput"></a>

```go
func QuartzCronScheduleInput() *string
```

- *Type:* *string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneIdInput"></a>

```go
func TimezoneIdInput() *string
```

- *Type:* *string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatus"></a>

```go
func PauseStatus() *string
```

- *Type:* *string

---

##### `QuartzCronSchedule`<sup>Required</sup> <a name="QuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronSchedule"></a>

```go
func QuartzCronSchedule() *string
```

- *Type:* *string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneId"></a>

```go
func TimezoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



