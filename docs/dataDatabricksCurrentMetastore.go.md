# `dataDatabricksCurrentMetastore` Submodule <a name="`dataDatabricksCurrentMetastore` Submodule" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCurrentMetastore <a name="DataDatabricksCurrentMetastore" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore databricks_current_metastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickscurrentmetastore"

datadatabrickscurrentmetastore.NewDataDatabricksCurrentMetastore(scope Construct, id *string, config DataDatabricksCurrentMetastoreConfig) DataDatabricksCurrentMetastore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig">DataDatabricksCurrentMetastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig">DataDatabricksCurrentMetastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo">PutMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetMetastoreInfo">ResetMetastoreInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMetastoreInfo` <a name="PutMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo"></a>

```go
func PutMetastoreInfo(value DataDatabricksCurrentMetastoreMetastoreInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetId"></a>

```go
func ResetId()
```

##### `ResetMetastoreInfo` <a name="ResetMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetMetastoreInfo"></a>

```go
func ResetMetastoreInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCurrentMetastore resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickscurrentmetastore"

datadatabrickscurrentmetastore.DataDatabricksCurrentMetastore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickscurrentmetastore"

datadatabrickscurrentmetastore.DataDatabricksCurrentMetastore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickscurrentmetastore"

datadatabrickscurrentmetastore.DataDatabricksCurrentMetastore_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickscurrentmetastore"

datadatabrickscurrentmetastore.DataDatabricksCurrentMetastore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksCurrentMetastore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksCurrentMetastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksCurrentMetastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCurrentMetastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfo">MetastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference">DataDatabricksCurrentMetastoreMetastoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfoInput">MetastoreInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `MetastoreInfo`<sup>Required</sup> <a name="MetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfo"></a>

```go
func MetastoreInfo() DataDatabricksCurrentMetastoreMetastoreInfoOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference">DataDatabricksCurrentMetastoreMetastoreInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetastoreInfoInput`<sup>Optional</sup> <a name="MetastoreInfoInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfoInput"></a>

```go
func MetastoreInfoInput() DataDatabricksCurrentMetastoreMetastoreInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCurrentMetastoreConfig <a name="DataDatabricksCurrentMetastoreConfig" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickscurrentmetastore"

&datadatabrickscurrentmetastore.DataDatabricksCurrentMetastoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	MetastoreInfo: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#id DataDatabricksCurrentMetastore#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.metastoreInfo">MetastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | metastore_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#id DataDatabricksCurrentMetastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreInfo`<sup>Optional</sup> <a name="MetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.metastoreInfo"></a>

```go
MetastoreInfo DataDatabricksCurrentMetastoreMetastoreInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

metastore_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#metastore_info DataDatabricksCurrentMetastore#metastore_info}

---

### DataDatabricksCurrentMetastoreMetastoreInfo <a name="DataDatabricksCurrentMetastoreMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickscurrentmetastore"

&datadatabrickscurrentmetastore.DataDatabricksCurrentMetastoreMetastoreInfo {
	Cloud: *string,
	CreatedAt: *f64,
	CreatedBy: *string,
	DefaultDataAccessConfigId: *string,
	DeltaSharingOrganizationName: *string,
	DeltaSharingRecipientTokenLifetimeInSeconds: *f64,
	DeltaSharingScope: *string,
	ExternalAccessEnabled: interface{},
	GlobalMetastoreId: *string,
	MetastoreId: *string,
	Name: *string,
	Owner: *string,
	PrivilegeModelVersion: *string,
	Region: *string,
	StorageRoot: *string,
	StorageRootCredentialId: *string,
	StorageRootCredentialName: *string,
	UpdatedAt: *f64,
	UpdatedBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.cloud">Cloud</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#cloud DataDatabricksCurrentMetastore#cloud}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#created_at DataDatabricksCurrentMetastore#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#created_by DataDatabricksCurrentMetastore#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#default_data_access_config_id DataDatabricksCurrentMetastore#default_data_access_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#delta_sharing_organization_name DataDatabricksCurrentMetastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksCurrentMetastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#delta_sharing_scope DataDatabricksCurrentMetastore#delta_sharing_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#external_access_enabled DataDatabricksCurrentMetastore#external_access_enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#global_metastore_id DataDatabricksCurrentMetastore#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#metastore_id DataDatabricksCurrentMetastore#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#name DataDatabricksCurrentMetastore#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#owner DataDatabricksCurrentMetastore#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.privilegeModelVersion">PrivilegeModelVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#privilege_model_version DataDatabricksCurrentMetastore#privilege_model_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#region DataDatabricksCurrentMetastore#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#storage_root DataDatabricksCurrentMetastore#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialId">StorageRootCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#storage_root_credential_id DataDatabricksCurrentMetastore#storage_root_credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialName">StorageRootCredentialName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#storage_root_credential_name DataDatabricksCurrentMetastore#storage_root_credential_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#updated_at DataDatabricksCurrentMetastore#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#updated_by DataDatabricksCurrentMetastore#updated_by}. |

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.cloud"></a>

```go
Cloud *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#cloud DataDatabricksCurrentMetastore#cloud}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdAt"></a>

```go
CreatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#created_at DataDatabricksCurrentMetastore#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#created_by DataDatabricksCurrentMetastore#created_by}.

---

##### `DefaultDataAccessConfigId`<sup>Optional</sup> <a name="DefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.defaultDataAccessConfigId"></a>

```go
DefaultDataAccessConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#default_data_access_config_id DataDatabricksCurrentMetastore#default_data_access_config_id}.

---

##### `DeltaSharingOrganizationName`<sup>Optional</sup> <a name="DeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingOrganizationName"></a>

```go
DeltaSharingOrganizationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#delta_sharing_organization_name DataDatabricksCurrentMetastore#delta_sharing_organization_name}.

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```go
DeltaSharingRecipientTokenLifetimeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksCurrentMetastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `DeltaSharingScope`<sup>Optional</sup> <a name="DeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingScope"></a>

```go
DeltaSharingScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#delta_sharing_scope DataDatabricksCurrentMetastore#delta_sharing_scope}.

---

##### `ExternalAccessEnabled`<sup>Optional</sup> <a name="ExternalAccessEnabled" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.externalAccessEnabled"></a>

```go
ExternalAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#external_access_enabled DataDatabricksCurrentMetastore#external_access_enabled}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.globalMetastoreId"></a>

```go
GlobalMetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#global_metastore_id DataDatabricksCurrentMetastore#global_metastore_id}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.metastoreId"></a>

```go
MetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#metastore_id DataDatabricksCurrentMetastore#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#name DataDatabricksCurrentMetastore#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#owner DataDatabricksCurrentMetastore#owner}.

---

##### `PrivilegeModelVersion`<sup>Optional</sup> <a name="PrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.privilegeModelVersion"></a>

```go
PrivilegeModelVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#privilege_model_version DataDatabricksCurrentMetastore#privilege_model_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#region DataDatabricksCurrentMetastore#region}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRoot"></a>

```go
StorageRoot *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#storage_root DataDatabricksCurrentMetastore#storage_root}.

---

##### `StorageRootCredentialId`<sup>Optional</sup> <a name="StorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialId"></a>

```go
StorageRootCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#storage_root_credential_id DataDatabricksCurrentMetastore#storage_root_credential_id}.

---

##### `StorageRootCredentialName`<sup>Optional</sup> <a name="StorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialName"></a>

```go
StorageRootCredentialName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#storage_root_credential_name DataDatabricksCurrentMetastore#storage_root_credential_name}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedAt"></a>

```go
UpdatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#updated_at DataDatabricksCurrentMetastore#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedBy"></a>

```go
UpdatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.67.0/docs/data-sources/current_metastore#updated_by DataDatabricksCurrentMetastore#updated_by}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCurrentMetastoreMetastoreInfoOutputReference <a name="DataDatabricksCurrentMetastoreMetastoreInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabrickscurrentmetastore"

datadatabrickscurrentmetastore.NewDataDatabricksCurrentMetastoreMetastoreInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksCurrentMetastoreMetastoreInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCloud">ResetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId">ResetDefaultDataAccessConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName">ResetDeltaSharingOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds">ResetDeltaSharingRecipientTokenLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope">ResetDeltaSharingScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetExternalAccessEnabled">ResetExternalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion">ResetPrivilegeModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId">ResetStorageRootCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName">ResetStorageRootCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloud` <a name="ResetCloud" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCloud"></a>

```go
func ResetCloud()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetDefaultDataAccessConfigId` <a name="ResetDefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId"></a>

```go
func ResetDefaultDataAccessConfigId()
```

##### `ResetDeltaSharingOrganizationName` <a name="ResetDeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName"></a>

```go
func ResetDeltaSharingOrganizationName()
```

##### `ResetDeltaSharingRecipientTokenLifetimeInSeconds` <a name="ResetDeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```go
func ResetDeltaSharingRecipientTokenLifetimeInSeconds()
```

##### `ResetDeltaSharingScope` <a name="ResetDeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope"></a>

```go
func ResetDeltaSharingScope()
```

##### `ResetExternalAccessEnabled` <a name="ResetExternalAccessEnabled" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetExternalAccessEnabled"></a>

```go
func ResetExternalAccessEnabled()
```

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId"></a>

```go
func ResetGlobalMetastoreId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetMetastoreId"></a>

```go
func ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetPrivilegeModelVersion` <a name="ResetPrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion"></a>

```go
func ResetPrivilegeModelVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRoot"></a>

```go
func ResetStorageRoot()
```

##### `ResetStorageRootCredentialId` <a name="ResetStorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId"></a>

```go
func ResetStorageRootCredentialId()
```

##### `ResetStorageRootCredentialName` <a name="ResetStorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName"></a>

```go
func ResetStorageRootCredentialName()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedAt"></a>

```go
func ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedBy"></a>

```go
func ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloudInput">CloudInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput">DefaultDataAccessConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput">DeltaSharingOrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput">DeltaSharingRecipientTokenLifetimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput">DeltaSharingScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabledInput">ExternalAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput">PrivilegeModelVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput">StorageRootCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput">StorageRootCredentialNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootInput">StorageRootInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloud">Cloud</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabled">ExternalAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion">PrivilegeModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRoot">StorageRoot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId">StorageRootCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName">StorageRootCredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloudInput"></a>

```go
func CloudInput() *string
```

- *Type:* *string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAtInput"></a>

```go
func CreatedAtInput() *f64
```

- *Type:* *f64

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `DefaultDataAccessConfigIdInput`<sup>Optional</sup> <a name="DefaultDataAccessConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput"></a>

```go
func DefaultDataAccessConfigIdInput() *string
```

- *Type:* *string

---

##### `DeltaSharingOrganizationNameInput`<sup>Optional</sup> <a name="DeltaSharingOrganizationNameInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput"></a>

```go
func DeltaSharingOrganizationNameInput() *string
```

- *Type:* *string

---

##### `DeltaSharingRecipientTokenLifetimeInSecondsInput`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSecondsInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```go
func DeltaSharingRecipientTokenLifetimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `DeltaSharingScopeInput`<sup>Optional</sup> <a name="DeltaSharingScopeInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput"></a>

```go
func DeltaSharingScopeInput() *string
```

- *Type:* *string

---

##### `ExternalAccessEnabledInput`<sup>Optional</sup> <a name="ExternalAccessEnabledInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabledInput"></a>

```go
func ExternalAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput"></a>

```go
func GlobalMetastoreIdInput() *string
```

- *Type:* *string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreIdInput"></a>

```go
func MetastoreIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `PrivilegeModelVersionInput`<sup>Optional</sup> <a name="PrivilegeModelVersionInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput"></a>

```go
func PrivilegeModelVersionInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StorageRootCredentialIdInput`<sup>Optional</sup> <a name="StorageRootCredentialIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput"></a>

```go
func StorageRootCredentialIdInput() *string
```

- *Type:* *string

---

##### `StorageRootCredentialNameInput`<sup>Optional</sup> <a name="StorageRootCredentialNameInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput"></a>

```go
func StorageRootCredentialNameInput() *string
```

- *Type:* *string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootInput"></a>

```go
func StorageRootInput() *string
```

- *Type:* *string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAtInput"></a>

```go
func UpdatedAtInput() *f64
```

- *Type:* *f64

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedByInput"></a>

```go
func UpdatedByInput() *string
```

- *Type:* *string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloud"></a>

```go
func Cloud() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefaultDataAccessConfigId`<sup>Required</sup> <a name="DefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId"></a>

```go
func DefaultDataAccessConfigId() *string
```

- *Type:* *string

---

##### `DeltaSharingOrganizationName`<sup>Required</sup> <a name="DeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName"></a>

```go
func DeltaSharingOrganizationName() *string
```

- *Type:* *string

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Required</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```go
func DeltaSharingRecipientTokenLifetimeInSeconds() *f64
```

- *Type:* *f64

---

##### `DeltaSharingScope`<sup>Required</sup> <a name="DeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScope"></a>

```go
func DeltaSharingScope() *string
```

- *Type:* *string

---

##### `ExternalAccessEnabled`<sup>Required</sup> <a name="ExternalAccessEnabled" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.externalAccessEnabled"></a>

```go
func ExternalAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreId"></a>

```go
func GlobalMetastoreId() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `PrivilegeModelVersion`<sup>Required</sup> <a name="PrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion"></a>

```go
func PrivilegeModelVersion() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRoot"></a>

```go
func StorageRoot() *string
```

- *Type:* *string

---

##### `StorageRootCredentialId`<sup>Required</sup> <a name="StorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId"></a>

```go
func StorageRootCredentialId() *string
```

- *Type:* *string

---

##### `StorageRootCredentialName`<sup>Required</sup> <a name="StorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName"></a>

```go
func StorageRootCredentialName() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksCurrentMetastoreMetastoreInfo
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---



