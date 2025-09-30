# `dataDatabricksAlertsV2` Submodule <a name="`dataDatabricksAlertsV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertsV2 <a name="DataDatabricksAlertsV2" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2 databricks_alerts_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2(scope Construct, id *string, config DataDatabricksAlertsV2Config) DataDatabricksAlertsV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config">DataDatabricksAlertsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config">DataDatabricksAlertsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAlertsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.DataDatabricksAlertsV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.DataDatabricksAlertsV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.DataDatabricksAlertsV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.DataDatabricksAlertsV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksAlertsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAlertsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAlertsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAlertsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.alerts">Alerts</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList">DataDatabricksAlertsV2AlertsList</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.alerts"></a>

```go
func Alerts() DataDatabricksAlertsV2AlertsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList">DataDatabricksAlertsV2AlertsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAlertsV2Alerts <a name="DataDatabricksAlertsV2Alerts" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2Alerts {
	CustomDescription: *string,
	CustomSummary: *string,
	DisplayName: *string,
	Evaluation: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation,
	ParentPath: *string,
	QueryText: *string,
	RunAs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs,
	RunAsUserName: *string,
	Schedule: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule,
	WarehouseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.customDescription">CustomDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#custom_description DataDatabricksAlertsV2#custom_description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.customSummary">CustomSummary</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#custom_summary DataDatabricksAlertsV2#custom_summary}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display_name DataDatabricksAlertsV2#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#evaluation DataDatabricksAlertsV2#evaluation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.parentPath">ParentPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#parent_path DataDatabricksAlertsV2#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.queryText">QueryText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#query_text DataDatabricksAlertsV2#query_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.runAs">RunAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#run_as DataDatabricksAlertsV2#run_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.runAsUserName">RunAsUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#run_as_user_name DataDatabricksAlertsV2#run_as_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#schedule DataDatabricksAlertsV2#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#warehouse_id DataDatabricksAlertsV2#warehouse_id}. |

---

##### `CustomDescription`<sup>Optional</sup> <a name="CustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.customDescription"></a>

```go
CustomDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#custom_description DataDatabricksAlertsV2#custom_description}.

---

##### `CustomSummary`<sup>Optional</sup> <a name="CustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.customSummary"></a>

```go
CustomSummary *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#custom_summary DataDatabricksAlertsV2#custom_summary}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display_name DataDatabricksAlertsV2#display_name}.

---

##### `Evaluation`<sup>Optional</sup> <a name="Evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.evaluation"></a>

```go
Evaluation DataDatabricksAlertsV2AlertsEvaluation
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#evaluation DataDatabricksAlertsV2#evaluation}.

---

##### `ParentPath`<sup>Optional</sup> <a name="ParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.parentPath"></a>

```go
ParentPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#parent_path DataDatabricksAlertsV2#parent_path}.

---

##### `QueryText`<sup>Optional</sup> <a name="QueryText" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.queryText"></a>

```go
QueryText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#query_text DataDatabricksAlertsV2#query_text}.

---

##### `RunAs`<sup>Optional</sup> <a name="RunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.runAs"></a>

```go
RunAs DataDatabricksAlertsV2AlertsRunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#run_as DataDatabricksAlertsV2#run_as}.

---

##### `RunAsUserName`<sup>Optional</sup> <a name="RunAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.runAsUserName"></a>

```go
RunAsUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#run_as_user_name DataDatabricksAlertsV2#run_as_user_name}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.schedule"></a>

```go
Schedule DataDatabricksAlertsV2AlertsSchedule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#schedule DataDatabricksAlertsV2#schedule}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#warehouse_id DataDatabricksAlertsV2#warehouse_id}.

---

### DataDatabricksAlertsV2AlertsEffectiveRunAs <a name="DataDatabricksAlertsV2AlertsEffectiveRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2AlertsEffectiveRunAs {
	ServicePrincipalName: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}. |

---

##### `ServicePrincipalName`<sup>Optional</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.servicePrincipalName"></a>

```go
ServicePrincipalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

### DataDatabricksAlertsV2AlertsEvaluation <a name="DataDatabricksAlertsV2AlertsEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2AlertsEvaluation {
	ComparisonOperator: *string,
	EmptyResultState: *string,
	Notification: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification,
	Source: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource,
	Threshold: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.emptyResultState">EmptyResultState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.comparisonOperator"></a>

```go
ComparisonOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#comparison_operator DataDatabricksAlertsV2#comparison_operator}.

---

##### `EmptyResultState`<sup>Optional</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.emptyResultState"></a>

```go
EmptyResultState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#empty_result_state DataDatabricksAlertsV2#empty_result_state}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.notification"></a>

```go
Notification DataDatabricksAlertsV2AlertsEvaluationNotification
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#notification DataDatabricksAlertsV2#notification}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.source"></a>

```go
Source DataDatabricksAlertsV2AlertsEvaluationSource
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#source DataDatabricksAlertsV2#source}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation.property.threshold"></a>

```go
Threshold DataDatabricksAlertsV2AlertsEvaluationThreshold
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#threshold DataDatabricksAlertsV2#threshold}.

---

### DataDatabricksAlertsV2AlertsEvaluationNotification <a name="DataDatabricksAlertsV2AlertsEvaluationNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2AlertsEvaluationNotification {
	NotifyOnOk: interface{},
	RetriggerSeconds: *f64,
	Subscriptions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.notifyOnOk">NotifyOnOk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.retriggerSeconds">RetriggerSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.subscriptions">Subscriptions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}. |

---

##### `NotifyOnOk`<sup>Optional</sup> <a name="NotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.notifyOnOk"></a>

```go
NotifyOnOk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#notify_on_ok DataDatabricksAlertsV2#notify_on_ok}.

---

##### `RetriggerSeconds`<sup>Optional</sup> <a name="RetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.retriggerSeconds"></a>

```go
RetriggerSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#retrigger_seconds DataDatabricksAlertsV2#retrigger_seconds}.

---

##### `Subscriptions`<sup>Optional</sup> <a name="Subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification.property.subscriptions"></a>

```go
Subscriptions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#subscriptions DataDatabricksAlertsV2#subscriptions}.

---

### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions {
	DestinationId: *string,
	UserEmail: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.destinationId">DestinationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.userEmail">UserEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}. |

---

##### `DestinationId`<sup>Optional</sup> <a name="DestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.destinationId"></a>

```go
DestinationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#destination_id DataDatabricksAlertsV2#destination_id}.

---

##### `UserEmail`<sup>Optional</sup> <a name="UserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptions.property.userEmail"></a>

```go
UserEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_email DataDatabricksAlertsV2#user_email}.

---

### DataDatabricksAlertsV2AlertsEvaluationSource <a name="DataDatabricksAlertsV2AlertsEvaluationSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2AlertsEvaluationSource {
	Aggregation: *string,
	Display: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.aggregation">Aggregation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.display">Display</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.display"></a>

```go
Display *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

### DataDatabricksAlertsV2AlertsEvaluationThreshold <a name="DataDatabricksAlertsV2AlertsEvaluationThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2AlertsEvaluationThreshold {
	Column: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn,
	Value: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}. |

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.column"></a>

```go
Column DataDatabricksAlertsV2AlertsEvaluationThresholdColumn
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#column DataDatabricksAlertsV2#column}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold.property.value"></a>

```go
Value DataDatabricksAlertsV2AlertsEvaluationThresholdValue
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#value DataDatabricksAlertsV2#value}.

---

### DataDatabricksAlertsV2AlertsEvaluationThresholdColumn <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn {
	Aggregation: *string,
	Display: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.aggregation">Aggregation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.display">Display</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.aggregation"></a>

```go
Aggregation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#aggregation DataDatabricksAlertsV2#aggregation}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.display"></a>

```go
Display *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#display DataDatabricksAlertsV2#display}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#name DataDatabricksAlertsV2#name}.

---

### DataDatabricksAlertsV2AlertsEvaluationThresholdValue <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue {
	BoolValue: interface{},
	DoubleValue: *f64,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#bool_value DataDatabricksAlertsV2#bool_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.doubleValue"></a>

```go
DoubleValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#double_value DataDatabricksAlertsV2#double_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#string_value DataDatabricksAlertsV2#string_value}.

---

### DataDatabricksAlertsV2AlertsRunAs <a name="DataDatabricksAlertsV2AlertsRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2AlertsRunAs {
	ServicePrincipalName: *string,
	UserName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}. |

---

##### `ServicePrincipalName`<sup>Optional</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.servicePrincipalName"></a>

```go
ServicePrincipalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#service_principal_name DataDatabricksAlertsV2#service_principal_name}.

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#user_name DataDatabricksAlertsV2#user_name}.

---

### DataDatabricksAlertsV2AlertsSchedule <a name="DataDatabricksAlertsV2AlertsSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2AlertsSchedule {
	PauseStatus: *string,
	QuartzCronSchedule: *string,
	TimezoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.pauseStatus">PauseStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}. |

---

##### `PauseStatus`<sup>Optional</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.pauseStatus"></a>

```go
PauseStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#pause_status DataDatabricksAlertsV2#pause_status}.

---

##### `QuartzCronSchedule`<sup>Optional</sup> <a name="QuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.quartzCronSchedule"></a>

```go
QuartzCronSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#quartz_cron_schedule DataDatabricksAlertsV2#quartz_cron_schedule}.

---

##### `TimezoneId`<sup>Optional</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule.property.timezoneId"></a>

```go
TimezoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alerts_v2#timezone_id DataDatabricksAlertsV2#timezone_id}.

---

### DataDatabricksAlertsV2Config <a name="DataDatabricksAlertsV2Config" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

&datadatabricksalertsv2.DataDatabricksAlertsV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference <a name="DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetServicePrincipalName">ResetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServicePrincipalName` <a name="ResetServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetServicePrincipalName"></a>

```go
func ResetServicePrincipalName()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.resetUserName"></a>

```go
func ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs">DataDatabricksAlertsV2AlertsEffectiveRunAs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalNameInput"></a>

```go
func ServicePrincipalNameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.servicePrincipalName"></a>

```go
func ServicePrincipalName() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAlertsV2AlertsEffectiveRunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAs">DataDatabricksAlertsV2AlertsEffectiveRunAs</a>

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions">PutSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetNotifyOnOk">ResetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetRetriggerSeconds">ResetRetriggerSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetSubscriptions">ResetSubscriptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubscriptions` <a name="PutSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions"></a>

```go
func PutSubscriptions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNotifyOnOk` <a name="ResetNotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```go
func ResetNotifyOnOk()
```

##### `ResetRetriggerSeconds` <a name="ResetRetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```go
func ResetRetriggerSeconds()
```

##### `ResetSubscriptions` <a name="ResetSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.resetSubscriptions"></a>

```go
func ResetSubscriptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptions">Subscriptions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOkInput">NotifyOnOkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSecondsInput">RetriggerSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptionsInput">SubscriptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOk">NotifyOnOk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSeconds">RetriggerSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptions"></a>

```go
func Subscriptions() DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList">DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList</a>

---

##### `NotifyOnOkInput`<sup>Optional</sup> <a name="NotifyOnOkInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```go
func NotifyOnOkInput() interface{}
```

- *Type:* interface{}

---

##### `RetriggerSecondsInput`<sup>Optional</sup> <a name="RetriggerSecondsInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```go
func RetriggerSecondsInput() *f64
```

- *Type:* *f64

---

##### `SubscriptionsInput`<sup>Optional</sup> <a name="SubscriptionsInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```go
func SubscriptionsInput() interface{}
```

- *Type:* interface{}

---

##### `NotifyOnOk`<sup>Required</sup> <a name="NotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.notifyOnOk"></a>

```go
func NotifyOnOk() interface{}
```

- *Type:* interface{}

---

##### `RetriggerSeconds`<sup>Required</sup> <a name="RetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```go
func RetriggerSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get"></a>

```go
func Get(index *f64) DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId">ResetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail">ResetUserEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationId` <a name="ResetDestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```go
func ResetDestinationId()
```

##### `ResetUserEmail` <a name="ResetUserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```go
func ResetUserEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">DestinationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationId">DestinationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmail">UserEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationIdInput`<sup>Optional</sup> <a name="DestinationIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```go
func DestinationIdInput() *string
```

- *Type:* *string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```go
func UserEmailInput() *string
```

- *Type:* *string

---

##### `DestinationId`<sup>Required</sup> <a name="DestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```go
func DestinationId() *string
```

- *Type:* *string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```go
func UserEmail() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertsV2AlertsEvaluationOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsEvaluationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertsV2AlertsEvaluationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetEmptyResultState">ResetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification"></a>

```go
func PutNotification(value DataDatabricksAlertsV2AlertsEvaluationNotification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotification">DataDatabricksAlertsV2AlertsEvaluationNotification</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource"></a>

```go
func PutSource(value DataDatabricksAlertsV2AlertsEvaluationSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSource">DataDatabricksAlertsV2AlertsEvaluationSource</a>

---

##### `PutThreshold` <a name="PutThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold"></a>

```go
func PutThreshold(value DataDatabricksAlertsV2AlertsEvaluationThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThreshold">DataDatabricksAlertsV2AlertsEvaluationThreshold</a>

---

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetComparisonOperator"></a>

```go
func ResetComparisonOperator()
```

##### `ResetEmptyResultState` <a name="ResetEmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetEmptyResultState"></a>

```go
func ResetEmptyResultState()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetNotification"></a>

```go
func ResetNotification()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetSource"></a>

```go
func ResetSource()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.lastEvaluatedAt">LastEvaluatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference">DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference">DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultStateInput">EmptyResultStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notificationInput">NotificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultState">EmptyResultState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastEvaluatedAt`<sup>Required</sup> <a name="LastEvaluatedAt" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.lastEvaluatedAt"></a>

```go
func LastEvaluatedAt() *string
```

- *Type:* *string

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notification"></a>

```go
func Notification() DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference">DataDatabricksAlertsV2AlertsEvaluationNotificationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.source"></a>

```go
func Source() DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference">DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.threshold"></a>

```go
func Threshold() DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperatorInput"></a>

```go
func ComparisonOperatorInput() *string
```

- *Type:* *string

---

##### `EmptyResultStateInput`<sup>Optional</sup> <a name="EmptyResultStateInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultStateInput"></a>

```go
func EmptyResultStateInput() *string
```

- *Type:* *string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.notificationInput"></a>

```go
func NotificationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() interface{}
```

- *Type:* interface{}

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.comparisonOperator"></a>

```go
func ComparisonOperator() *string
```

- *Type:* *string

---

##### `EmptyResultState`<sup>Required</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.emptyResultState"></a>

```go
func EmptyResultState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsEvaluationSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetAggregation"></a>

```go
func ResetAggregation()
```

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetDisplay"></a>

```go
func ResetDisplay()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.displayInput">DisplayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.displayInput"></a>

```go
func DisplayInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetAggregation"></a>

```go
func ResetAggregation()
```

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetDisplay"></a>

```go
func ResetDisplay()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.displayInput">DisplayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregation">Aggregation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.display">Display</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```go
func AggregationInput() *string
```

- *Type:* *string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.displayInput"></a>

```go
func DisplayInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.aggregation"></a>

```go
func Aggregation() *string
```

- *Type:* *string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.display"></a>

```go
func Display() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn"></a>

```go
func PutColumn(value DataDatabricksAlertsV2AlertsEvaluationThresholdColumn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumn">DataDatabricksAlertsV2AlertsEvaluationThresholdColumn</a>

---

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue"></a>

```go
func PutValue(value DataDatabricksAlertsV2AlertsEvaluationThresholdValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValue">DataDatabricksAlertsV2AlertsEvaluationThresholdValue</a>

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetColumn"></a>

```go
func ResetColumn()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.columnInput">ColumnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.column"></a>

```go
func Column() DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdColumnOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.value"></a>

```go
func Value() DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference">DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.columnInput"></a>

```go
func ColumnInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference <a name="DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```go
func ResetDoubleValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```go
func DoubleValueInput() *f64
```

- *Type:* *f64

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationThresholdValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertsV2AlertsList <a name="DataDatabricksAlertsV2AlertsList" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAlertsV2AlertsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get"></a>

```go
func Get(index *f64) DataDatabricksAlertsV2AlertsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertsV2AlertsOutputReference <a name="DataDatabricksAlertsV2AlertsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAlertsV2AlertsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putEvaluation">PutEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putRunAs">PutRunAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetCustomDescription">ResetCustomDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetCustomSummary">ResetCustomSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetEvaluation">ResetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetParentPath">ResetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetQueryText">ResetQueryText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetRunAs">ResetRunAs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetRunAsUserName">ResetRunAsUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEvaluation` <a name="PutEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putEvaluation"></a>

```go
func PutEvaluation(value DataDatabricksAlertsV2AlertsEvaluation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluation">DataDatabricksAlertsV2AlertsEvaluation</a>

---

##### `PutRunAs` <a name="PutRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putRunAs"></a>

```go
func PutRunAs(value DataDatabricksAlertsV2AlertsRunAs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putRunAs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAs">DataDatabricksAlertsV2AlertsRunAs</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putSchedule"></a>

```go
func PutSchedule(value DataDatabricksAlertsV2AlertsSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsSchedule">DataDatabricksAlertsV2AlertsSchedule</a>

---

##### `ResetCustomDescription` <a name="ResetCustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetCustomDescription"></a>

```go
func ResetCustomDescription()
```

##### `ResetCustomSummary` <a name="ResetCustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetCustomSummary"></a>

```go
func ResetCustomSummary()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEvaluation` <a name="ResetEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetEvaluation"></a>

```go
func ResetEvaluation()
```

##### `ResetParentPath` <a name="ResetParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetParentPath"></a>

```go
func ResetParentPath()
```

##### `ResetQueryText` <a name="ResetQueryText" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetQueryText"></a>

```go
func ResetQueryText()
```

##### `ResetRunAs` <a name="ResetRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetRunAs"></a>

```go
func ResetRunAs()
```

##### `ResetRunAsUserName` <a name="ResetRunAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetRunAsUserName"></a>

```go
func ResetRunAsUserName()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.resetWarehouseId"></a>

```go
func ResetWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.effectiveRunAs">EffectiveRunAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference">DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference">DataDatabricksAlertsV2AlertsEvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.ownerUserName">OwnerUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAs">RunAs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference">DataDatabricksAlertsV2AlertsRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference">DataDatabricksAlertsV2AlertsScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescriptionInput">CustomDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummaryInput">CustomSummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluationInput">EvaluationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPathInput">ParentPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryTextInput">QueryTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsInput">RunAsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserNameInput">RunAsUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescription">CustomDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummary">CustomSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPath">ParentPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryText">QueryText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserName">RunAsUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveRunAs`<sup>Required</sup> <a name="EffectiveRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.effectiveRunAs"></a>

```go
func EffectiveRunAs() DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference">DataDatabricksAlertsV2AlertsEffectiveRunAsOutputReference</a>

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluation"></a>

```go
func Evaluation() DataDatabricksAlertsV2AlertsEvaluationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsEvaluationOutputReference">DataDatabricksAlertsV2AlertsEvaluationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.ownerUserName"></a>

```go
func OwnerUserName() *string
```

- *Type:* *string

---

##### `RunAs`<sup>Required</sup> <a name="RunAs" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAs"></a>

```go
func RunAs() DataDatabricksAlertsV2AlertsRunAsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference">DataDatabricksAlertsV2AlertsRunAsOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.schedule"></a>

```go
func Schedule() DataDatabricksAlertsV2AlertsScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference">DataDatabricksAlertsV2AlertsScheduleOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CustomDescriptionInput`<sup>Optional</sup> <a name="CustomDescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescriptionInput"></a>

```go
func CustomDescriptionInput() *string
```

- *Type:* *string

---

##### `CustomSummaryInput`<sup>Optional</sup> <a name="CustomSummaryInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummaryInput"></a>

```go
func CustomSummaryInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EvaluationInput`<sup>Optional</sup> <a name="EvaluationInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.evaluationInput"></a>

```go
func EvaluationInput() interface{}
```

- *Type:* interface{}

---

##### `ParentPathInput`<sup>Optional</sup> <a name="ParentPathInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPathInput"></a>

```go
func ParentPathInput() *string
```

- *Type:* *string

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryTextInput"></a>

```go
func QueryTextInput() *string
```

- *Type:* *string

---

##### `RunAsInput`<sup>Optional</sup> <a name="RunAsInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsInput"></a>

```go
func RunAsInput() interface{}
```

- *Type:* interface{}

---

##### `RunAsUserNameInput`<sup>Optional</sup> <a name="RunAsUserNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserNameInput"></a>

```go
func RunAsUserNameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() interface{}
```

- *Type:* interface{}

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `CustomDescription`<sup>Required</sup> <a name="CustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customDescription"></a>

```go
func CustomDescription() *string
```

- *Type:* *string

---

##### `CustomSummary`<sup>Required</sup> <a name="CustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.customSummary"></a>

```go
func CustomSummary() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.parentPath"></a>

```go
func ParentPath() *string
```

- *Type:* *string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.queryText"></a>

```go
func QueryText() *string
```

- *Type:* *string

---

##### `RunAsUserName`<sup>Required</sup> <a name="RunAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.runAsUserName"></a>

```go
func RunAsUserName() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAlertsV2Alerts
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2Alerts">DataDatabricksAlertsV2Alerts</a>

---


### DataDatabricksAlertsV2AlertsRunAsOutputReference <a name="DataDatabricksAlertsV2AlertsRunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsRunAsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertsV2AlertsRunAsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetServicePrincipalName">ResetServicePrincipalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServicePrincipalName` <a name="ResetServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetServicePrincipalName"></a>

```go
func ResetServicePrincipalName()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.resetUserName"></a>

```go
func ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalNameInput">ServicePrincipalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalName">ServicePrincipalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServicePrincipalNameInput`<sup>Optional</sup> <a name="ServicePrincipalNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalNameInput"></a>

```go
func ServicePrincipalNameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `ServicePrincipalName`<sup>Required</sup> <a name="ServicePrincipalName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.servicePrincipalName"></a>

```go
func ServicePrincipalName() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsRunAsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAlertsV2AlertsScheduleOutputReference <a name="DataDatabricksAlertsV2AlertsScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksalertsv2"

datadatabricksalertsv2.NewDataDatabricksAlertsV2AlertsScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAlertsV2AlertsScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetPauseStatus">ResetPauseStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetQuartzCronSchedule">ResetQuartzCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetTimezoneId">ResetTimezoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPauseStatus` <a name="ResetPauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetPauseStatus"></a>

```go
func ResetPauseStatus()
```

##### `ResetQuartzCronSchedule` <a name="ResetQuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetQuartzCronSchedule"></a>

```go
func ResetQuartzCronSchedule()
```

##### `ResetTimezoneId` <a name="ResetTimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.resetTimezoneId"></a>

```go
func ResetTimezoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatusInput">PauseStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronScheduleInput">QuartzCronScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PauseStatusInput`<sup>Optional</sup> <a name="PauseStatusInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatusInput"></a>

```go
func PauseStatusInput() *string
```

- *Type:* *string

---

##### `QuartzCronScheduleInput`<sup>Optional</sup> <a name="QuartzCronScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronScheduleInput"></a>

```go
func QuartzCronScheduleInput() *string
```

- *Type:* *string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneIdInput"></a>

```go
func TimezoneIdInput() *string
```

- *Type:* *string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.pauseStatus"></a>

```go
func PauseStatus() *string
```

- *Type:* *string

---

##### `QuartzCronSchedule`<sup>Required</sup> <a name="QuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.quartzCronSchedule"></a>

```go
func QuartzCronSchedule() *string
```

- *Type:* *string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.timezoneId"></a>

```go
func TimezoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertsV2.DataDatabricksAlertsV2AlertsScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



