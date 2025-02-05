# `dataDatabricksFunctions` Submodule <a name="`dataDatabricksFunctions` Submodule" id="@cdktf/provider-databricks.dataDatabricksFunctions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFunctions <a name="DataDatabricksFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions databricks_functions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctions(scope Construct, id *string, config DataDatabricksFunctionsConfig) DataDatabricksFunctions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig">DataDatabricksFunctionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig">DataDatabricksFunctionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions">PutFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetFunctions">ResetFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetIncludeBrowse">ResetIncludeBrowse</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFunctions` <a name="PutFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions"></a>

```go
func PutFunctions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFunctions` <a name="ResetFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetFunctions"></a>

```go
func ResetFunctions()
```

##### `ResetIncludeBrowse` <a name="ResetIncludeBrowse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetIncludeBrowse"></a>

```go
func ResetIncludeBrowse()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksFunctions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.DataDatabricksFunctions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.DataDatabricksFunctions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.DataDatabricksFunctions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.DataDatabricksFunctions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksFunctions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksFunctions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksFunctions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksFunctions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functions">Functions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList">DataDatabricksFunctionsFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functionsInput">FunctionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowseInput">IncludeBrowseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowse">IncludeBrowse</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functions"></a>

```go
func Functions() DataDatabricksFunctionsFunctionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList">DataDatabricksFunctionsFunctionsList</a>

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `FunctionsInput`<sup>Optional</sup> <a name="FunctionsInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functionsInput"></a>

```go
func FunctionsInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeBrowseInput`<sup>Optional</sup> <a name="IncludeBrowseInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowseInput"></a>

```go
func IncludeBrowseInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `IncludeBrowse`<sup>Required</sup> <a name="IncludeBrowse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowse"></a>

```go
func IncludeBrowse() interface{}
```

- *Type:* interface{}

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFunctionsConfig <a name="DataDatabricksFunctionsConfig" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

&datadatabricksfunctions.DataDatabricksFunctionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CatalogName: *string,
	SchemaName: *string,
	Functions: interface{},
	IncludeBrowse: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.functions">Functions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#functions DataDatabricksFunctions#functions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.includeBrowse">IncludeBrowse</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}.

---

##### `Functions`<sup>Optional</sup> <a name="Functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.functions"></a>

```go
Functions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#functions DataDatabricksFunctions#functions}.

---

##### `IncludeBrowse`<sup>Optional</sup> <a name="IncludeBrowse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.includeBrowse"></a>

```go
IncludeBrowse interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}.

---

### DataDatabricksFunctionsFunctions <a name="DataDatabricksFunctionsFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

&datadatabricksfunctions.DataDatabricksFunctionsFunctions {
	BrowseOnly: interface{},
	CatalogName: *string,
	Comment: *string,
	CreatedAt: *f64,
	CreatedBy: *string,
	DataType: *string,
	ExternalLanguage: *string,
	ExternalName: *string,
	FullDataType: *string,
	FullName: *string,
	FunctionId: *string,
	InputParams: interface{},
	IsDeterministic: interface{},
	IsNullCall: interface{},
	MetastoreId: *string,
	Name: *string,
	Owner: *string,
	ParameterStyle: *string,
	Properties: *string,
	ReturnParams: interface{},
	RoutineBody: *string,
	RoutineDefinition: *string,
	RoutineDependencies: interface{},
	SchemaName: *string,
	SecurityType: *string,
	SpecificName: *string,
	SqlDataAccess: *string,
	SqlPath: *string,
	UpdatedAt: *f64,
	UpdatedBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#browse_only DataDatabricksFunctions#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.catalogName">CatalogName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#created_at DataDatabricksFunctions#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdBy">CreatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#created_by DataDatabricksFunctions#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#data_type DataDatabricksFunctions#data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalLanguage">ExternalLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#external_language DataDatabricksFunctions#external_language}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalName">ExternalName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#external_name DataDatabricksFunctions#external_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullDataType">FullDataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#full_data_type DataDatabricksFunctions#full_data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullName">FullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#full_name DataDatabricksFunctions#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.functionId">FunctionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#function_id DataDatabricksFunctions#function_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.inputParams">InputParams</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#input_params DataDatabricksFunctions#input_params}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isDeterministic">IsDeterministic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#is_deterministic DataDatabricksFunctions#is_deterministic}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isNullCall">IsNullCall</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#is_null_call DataDatabricksFunctions#is_null_call}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#metastore_id DataDatabricksFunctions#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.owner">Owner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#owner DataDatabricksFunctions#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.parameterStyle">ParameterStyle</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_style DataDatabricksFunctions#parameter_style}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.properties">Properties</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#properties DataDatabricksFunctions#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.returnParams">ReturnParams</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#return_params DataDatabricksFunctions#return_params}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineBody">RoutineBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#routine_body DataDatabricksFunctions#routine_body}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDefinition">RoutineDefinition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#routine_definition DataDatabricksFunctions#routine_definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDependencies">RoutineDependencies</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#routine_dependencies DataDatabricksFunctions#routine_dependencies}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.schemaName">SchemaName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.securityType">SecurityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#security_type DataDatabricksFunctions#security_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.specificName">SpecificName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#specific_name DataDatabricksFunctions#specific_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlDataAccess">SqlDataAccess</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#sql_data_access DataDatabricksFunctions#sql_data_access}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlPath">SqlPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#sql_path DataDatabricksFunctions#sql_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#updated_at DataDatabricksFunctions#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#updated_by DataDatabricksFunctions#updated_by}. |

---

##### `BrowseOnly`<sup>Optional</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.browseOnly"></a>

```go
BrowseOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#browse_only DataDatabricksFunctions#browse_only}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.catalogName"></a>

```go
CatalogName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdAt"></a>

```go
CreatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#created_at DataDatabricksFunctions#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdBy"></a>

```go
CreatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#created_by DataDatabricksFunctions#created_by}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#data_type DataDatabricksFunctions#data_type}.

---

##### `ExternalLanguage`<sup>Optional</sup> <a name="ExternalLanguage" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalLanguage"></a>

```go
ExternalLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#external_language DataDatabricksFunctions#external_language}.

---

##### `ExternalName`<sup>Optional</sup> <a name="ExternalName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalName"></a>

```go
ExternalName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#external_name DataDatabricksFunctions#external_name}.

---

##### `FullDataType`<sup>Optional</sup> <a name="FullDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullDataType"></a>

```go
FullDataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#full_data_type DataDatabricksFunctions#full_data_type}.

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullName"></a>

```go
FullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#full_name DataDatabricksFunctions#full_name}.

---

##### `FunctionId`<sup>Optional</sup> <a name="FunctionId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.functionId"></a>

```go
FunctionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#function_id DataDatabricksFunctions#function_id}.

---

##### `InputParams`<sup>Optional</sup> <a name="InputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.inputParams"></a>

```go
InputParams interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#input_params DataDatabricksFunctions#input_params}.

---

##### `IsDeterministic`<sup>Optional</sup> <a name="IsDeterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isDeterministic"></a>

```go
IsDeterministic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#is_deterministic DataDatabricksFunctions#is_deterministic}.

---

##### `IsNullCall`<sup>Optional</sup> <a name="IsNullCall" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isNullCall"></a>

```go
IsNullCall interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#is_null_call DataDatabricksFunctions#is_null_call}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.metastoreId"></a>

```go
MetastoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#metastore_id DataDatabricksFunctions#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#owner DataDatabricksFunctions#owner}.

---

##### `ParameterStyle`<sup>Optional</sup> <a name="ParameterStyle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.parameterStyle"></a>

```go
ParameterStyle *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_style DataDatabricksFunctions#parameter_style}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.properties"></a>

```go
Properties *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#properties DataDatabricksFunctions#properties}.

---

##### `ReturnParams`<sup>Optional</sup> <a name="ReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.returnParams"></a>

```go
ReturnParams interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#return_params DataDatabricksFunctions#return_params}.

---

##### `RoutineBody`<sup>Optional</sup> <a name="RoutineBody" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineBody"></a>

```go
RoutineBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#routine_body DataDatabricksFunctions#routine_body}.

---

##### `RoutineDefinition`<sup>Optional</sup> <a name="RoutineDefinition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDefinition"></a>

```go
RoutineDefinition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#routine_definition DataDatabricksFunctions#routine_definition}.

---

##### `RoutineDependencies`<sup>Optional</sup> <a name="RoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDependencies"></a>

```go
RoutineDependencies interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#routine_dependencies DataDatabricksFunctions#routine_dependencies}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.schemaName"></a>

```go
SchemaName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}.

---

##### `SecurityType`<sup>Optional</sup> <a name="SecurityType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.securityType"></a>

```go
SecurityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#security_type DataDatabricksFunctions#security_type}.

---

##### `SpecificName`<sup>Optional</sup> <a name="SpecificName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.specificName"></a>

```go
SpecificName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#specific_name DataDatabricksFunctions#specific_name}.

---

##### `SqlDataAccess`<sup>Optional</sup> <a name="SqlDataAccess" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlDataAccess"></a>

```go
SqlDataAccess *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#sql_data_access DataDatabricksFunctions#sql_data_access}.

---

##### `SqlPath`<sup>Optional</sup> <a name="SqlPath" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlPath"></a>

```go
SqlPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#sql_path DataDatabricksFunctions#sql_path}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedAt"></a>

```go
UpdatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#updated_at DataDatabricksFunctions#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedBy"></a>

```go
UpdatedBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#updated_by DataDatabricksFunctions#updated_by}.

---

### DataDatabricksFunctionsFunctionsInputParams <a name="DataDatabricksFunctionsFunctionsInputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

&datadatabricksfunctions.DataDatabricksFunctionsFunctionsInputParams {
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.property.parameters">Parameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}.

---

### DataDatabricksFunctionsFunctionsInputParamsParameters <a name="DataDatabricksFunctionsFunctionsInputParamsParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

&datadatabricksfunctions.DataDatabricksFunctionsFunctionsInputParamsParameters {
	Name: *string,
	Position: *f64,
	TypeName: *string,
	TypeText: *string,
	Comment: *string,
	ParameterDefault: *string,
	ParameterMode: *string,
	ParameterType: *string,
	TypeIntervalType: *string,
	TypeJson: *string,
	TypePrecision: *f64,
	TypeScale: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#position DataDatabricksFunctions#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeText">TypeText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterDefault">ParameterDefault</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterMode">ParameterMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterType">ParameterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeJson">TypeJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeScale">TypeScale</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#position DataDatabricksFunctions#position}.

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}.

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeText"></a>

```go
TypeText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `ParameterDefault`<sup>Optional</sup> <a name="ParameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterDefault"></a>

```go
ParameterDefault *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}.

---

##### `ParameterMode`<sup>Optional</sup> <a name="ParameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterMode"></a>

```go
ParameterMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}.

---

##### `ParameterType`<sup>Optional</sup> <a name="ParameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterType"></a>

```go
ParameterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeIntervalType"></a>

```go
TypeIntervalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeJson"></a>

```go
TypeJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typePrecision"></a>

```go
TypePrecision *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeScale"></a>

```go
TypeScale *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}.

---

### DataDatabricksFunctionsFunctionsReturnParams <a name="DataDatabricksFunctionsFunctionsReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

&datadatabricksfunctions.DataDatabricksFunctionsFunctionsReturnParams {
	Parameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.property.parameters">Parameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}.

---

### DataDatabricksFunctionsFunctionsReturnParamsParameters <a name="DataDatabricksFunctionsFunctionsReturnParamsParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

&datadatabricksfunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters {
	Name: *string,
	Position: *f64,
	TypeName: *string,
	TypeText: *string,
	Comment: *string,
	ParameterDefault: *string,
	ParameterMode: *string,
	ParameterType: *string,
	TypeIntervalType: *string,
	TypeJson: *string,
	TypePrecision: *f64,
	TypeScale: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.position">Position</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#position DataDatabricksFunctions#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeName">TypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeText">TypeText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterDefault">ParameterDefault</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterMode">ParameterMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterType">ParameterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeJson">TypeJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeScale">TypeScale</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.position"></a>

```go
Position *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#position DataDatabricksFunctions#position}.

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeName"></a>

```go
TypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}.

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeText"></a>

```go
TypeText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `ParameterDefault`<sup>Optional</sup> <a name="ParameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterDefault"></a>

```go
ParameterDefault *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}.

---

##### `ParameterMode`<sup>Optional</sup> <a name="ParameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterMode"></a>

```go
ParameterMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}.

---

##### `ParameterType`<sup>Optional</sup> <a name="ParameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterType"></a>

```go
ParameterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}.

---

##### `TypeIntervalType`<sup>Optional</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeIntervalType"></a>

```go
TypeIntervalType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}.

---

##### `TypeJson`<sup>Optional</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeJson"></a>

```go
TypeJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}.

---

##### `TypePrecision`<sup>Optional</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typePrecision"></a>

```go
TypePrecision *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}.

---

##### `TypeScale`<sup>Optional</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeScale"></a>

```go
TypeScale *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}.

---

### DataDatabricksFunctionsFunctionsRoutineDependencies <a name="DataDatabricksFunctionsFunctionsRoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

&datadatabricksfunctions.DataDatabricksFunctionsFunctionsRoutineDependencies {
	Dependencies: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.property.dependencies">Dependencies</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#dependencies DataDatabricksFunctions#dependencies}. |

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.property.dependencies"></a>

```go
Dependencies interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#dependencies DataDatabricksFunctions#dependencies}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

&datadatabricksfunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies {
	Function: interface{},
	Table: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.function">Function</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#function DataDatabricksFunctions#function}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.table">Table</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#table DataDatabricksFunctions#table}. |

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.function"></a>

```go
Function interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#function DataDatabricksFunctions#function}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.table"></a>

```go
Table interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#table DataDatabricksFunctions#table}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

&datadatabricksfunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction {
	FunctionFullName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.property.functionFullName">FunctionFullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#function_full_name DataDatabricksFunctions#function_full_name}. |

---

##### `FunctionFullName`<sup>Required</sup> <a name="FunctionFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.property.functionFullName"></a>

```go
FunctionFullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#function_full_name DataDatabricksFunctions#function_full_name}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

&datadatabricksfunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable {
	TableFullName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.property.tableFullName">TableFullName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#table_full_name DataDatabricksFunctions#table_full_name}. |

---

##### `TableFullName`<sup>Required</sup> <a name="TableFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.property.tableFullName"></a>

```go
TableFullName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.65.0/docs/data-sources/functions#table_full_name DataDatabricksFunctions#table_full_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFunctionsFunctionsInputParamsList <a name="DataDatabricksFunctionsFunctionsInputParamsList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsInputParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFunctionsFunctionsInputParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.get"></a>

```go
func Get(index *f64) DataDatabricksFunctionsFunctionsInputParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsInputParamsOutputReference <a name="DataDatabricksFunctionsFunctionsInputParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsInputParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFunctionsFunctionsInputParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList">DataDatabricksFunctionsFunctionsInputParamsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parameters"></a>

```go
func Parameters() DataDatabricksFunctionsFunctionsInputParamsParametersList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList">DataDatabricksFunctionsFunctionsInputParamsParametersList</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsInputParamsParametersList <a name="DataDatabricksFunctionsFunctionsInputParamsParametersList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsInputParamsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFunctionsFunctionsInputParamsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get"></a>

```go
func Get(index *f64) DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference <a name="DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsInputParamsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterDefault">ResetParameterDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterMode">ResetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterType">ResetParameterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetParameterDefault` <a name="ResetParameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterDefault"></a>

```go
func ResetParameterDefault()
```

##### `ResetParameterMode` <a name="ResetParameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterMode"></a>

```go
func ResetParameterMode()
```

##### `ResetParameterType` <a name="ResetParameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterType"></a>

```go
func ResetParameterType()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeIntervalType"></a>

```go
func ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeJson"></a>

```go
func ResetTypeJson()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypePrecision"></a>

```go
func ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeScale"></a>

```go
func ResetTypeScale()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefaultInput">ParameterDefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterModeInput">ParameterModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterTypeInput">ParameterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefault">ParameterDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterMode">ParameterMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterType">ParameterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJson">TypeJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScale">TypeScale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeText">TypeText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterDefaultInput`<sup>Optional</sup> <a name="ParameterDefaultInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefaultInput"></a>

```go
func ParameterDefaultInput() *string
```

- *Type:* *string

---

##### `ParameterModeInput`<sup>Optional</sup> <a name="ParameterModeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterModeInput"></a>

```go
func ParameterModeInput() *string
```

- *Type:* *string

---

##### `ParameterTypeInput`<sup>Optional</sup> <a name="ParameterTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterTypeInput"></a>

```go
func ParameterTypeInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalTypeInput"></a>

```go
func TypeIntervalTypeInput() *string
```

- *Type:* *string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJsonInput"></a>

```go
func TypeJsonInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecisionInput"></a>

```go
func TypePrecisionInput() *f64
```

- *Type:* *f64

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScaleInput"></a>

```go
func TypeScaleInput() *f64
```

- *Type:* *f64

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeTextInput"></a>

```go
func TypeTextInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParameterDefault`<sup>Required</sup> <a name="ParameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefault"></a>

```go
func ParameterDefault() *string
```

- *Type:* *string

---

##### `ParameterMode`<sup>Required</sup> <a name="ParameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterMode"></a>

```go
func ParameterMode() *string
```

- *Type:* *string

---

##### `ParameterType`<sup>Required</sup> <a name="ParameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterType"></a>

```go
func ParameterType() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalType"></a>

```go
func TypeIntervalType() *string
```

- *Type:* *string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJson"></a>

```go
func TypeJson() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecision"></a>

```go
func TypePrecision() *f64
```

- *Type:* *f64

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScale"></a>

```go
func TypeScale() *f64
```

- *Type:* *f64

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeText"></a>

```go
func TypeText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsList <a name="DataDatabricksFunctionsFunctionsList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFunctionsFunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get"></a>

```go
func Get(index *f64) DataDatabricksFunctionsFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsOutputReference <a name="DataDatabricksFunctionsFunctionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFunctionsFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams">PutInputParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams">PutReturnParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies">PutRoutineDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetBrowseOnly">ResetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalLanguage">ResetExternalLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalName">ResetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullDataType">ResetFullDataType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFunctionId">ResetFunctionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetInputParams">ResetInputParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsDeterministic">ResetIsDeterministic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsNullCall">ResetIsNullCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetParameterStyle">ResetParameterStyle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetReturnParams">ResetReturnParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineBody">ResetRoutineBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDefinition">ResetRoutineDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDependencies">ResetRoutineDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSecurityType">ResetSecurityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSpecificName">ResetSpecificName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlDataAccess">ResetSqlDataAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlPath">ResetSqlPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputParams` <a name="PutInputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams"></a>

```go
func PutInputParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutReturnParams` <a name="PutReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams"></a>

```go
func PutReturnParams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRoutineDependencies` <a name="PutRoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies"></a>

```go
func PutRoutineDependencies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBrowseOnly` <a name="ResetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetBrowseOnly"></a>

```go
func ResetBrowseOnly()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCatalogName"></a>

```go
func ResetCatalogName()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetExternalLanguage` <a name="ResetExternalLanguage" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalLanguage"></a>

```go
func ResetExternalLanguage()
```

##### `ResetExternalName` <a name="ResetExternalName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalName"></a>

```go
func ResetExternalName()
```

##### `ResetFullDataType` <a name="ResetFullDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullDataType"></a>

```go
func ResetFullDataType()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullName"></a>

```go
func ResetFullName()
```

##### `ResetFunctionId` <a name="ResetFunctionId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFunctionId"></a>

```go
func ResetFunctionId()
```

##### `ResetInputParams` <a name="ResetInputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetInputParams"></a>

```go
func ResetInputParams()
```

##### `ResetIsDeterministic` <a name="ResetIsDeterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsDeterministic"></a>

```go
func ResetIsDeterministic()
```

##### `ResetIsNullCall` <a name="ResetIsNullCall" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsNullCall"></a>

```go
func ResetIsNullCall()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetMetastoreId"></a>

```go
func ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetParameterStyle` <a name="ResetParameterStyle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetParameterStyle"></a>

```go
func ResetParameterStyle()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetReturnParams` <a name="ResetReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetReturnParams"></a>

```go
func ResetReturnParams()
```

##### `ResetRoutineBody` <a name="ResetRoutineBody" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineBody"></a>

```go
func ResetRoutineBody()
```

##### `ResetRoutineDefinition` <a name="ResetRoutineDefinition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDefinition"></a>

```go
func ResetRoutineDefinition()
```

##### `ResetRoutineDependencies` <a name="ResetRoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDependencies"></a>

```go
func ResetRoutineDependencies()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSchemaName"></a>

```go
func ResetSchemaName()
```

##### `ResetSecurityType` <a name="ResetSecurityType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSecurityType"></a>

```go
func ResetSecurityType()
```

##### `ResetSpecificName` <a name="ResetSpecificName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSpecificName"></a>

```go
func ResetSpecificName()
```

##### `ResetSqlDataAccess` <a name="ResetSqlDataAccess" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlDataAccess"></a>

```go
func ResetSqlDataAccess()
```

##### `ResetSqlPath` <a name="ResetSqlPath" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlPath"></a>

```go
func ResetSqlPath()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedAt"></a>

```go
func ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedBy"></a>

```go
func ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParams">InputParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList">DataDatabricksFunctionsFunctionsInputParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParams">ReturnParams</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList">DataDatabricksFunctionsFunctionsReturnParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependencies">RoutineDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnlyInput">BrowseOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguageInput">ExternalLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalNameInput">ExternalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataTypeInput">FullDataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionIdInput">FunctionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParamsInput">InputParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministicInput">IsDeterministicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCallInput">IsNullCallInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyleInput">ParameterStyleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParamsInput">ReturnParamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBodyInput">RoutineBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinitionInput">RoutineDefinitionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependenciesInput">RoutineDependenciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityTypeInput">SecurityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificNameInput">SpecificNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccessInput">SqlDataAccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPathInput">SqlPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnly">BrowseOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogName">CatalogName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAt">CreatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguage">ExternalLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalName">ExternalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataType">FullDataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullName">FullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministic">IsDeterministic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCall">IsNullCall</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyle">ParameterStyle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.properties">Properties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBody">RoutineBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinition">RoutineDefinition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityType">SecurityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificName">SpecificName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccess">SqlDataAccess</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPath">SqlPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputParams`<sup>Required</sup> <a name="InputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParams"></a>

```go
func InputParams() DataDatabricksFunctionsFunctionsInputParamsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList">DataDatabricksFunctionsFunctionsInputParamsList</a>

---

##### `ReturnParams`<sup>Required</sup> <a name="ReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParams"></a>

```go
func ReturnParams() DataDatabricksFunctionsFunctionsReturnParamsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList">DataDatabricksFunctionsFunctionsReturnParamsList</a>

---

##### `RoutineDependencies`<sup>Required</sup> <a name="RoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependencies"></a>

```go
func RoutineDependencies() DataDatabricksFunctionsFunctionsRoutineDependenciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesList</a>

---

##### `BrowseOnlyInput`<sup>Optional</sup> <a name="BrowseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnlyInput"></a>

```go
func BrowseOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogNameInput"></a>

```go
func CatalogNameInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAtInput"></a>

```go
func CreatedAtInput() *f64
```

- *Type:* *f64

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdByInput"></a>

```go
func CreatedByInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `ExternalLanguageInput`<sup>Optional</sup> <a name="ExternalLanguageInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguageInput"></a>

```go
func ExternalLanguageInput() *string
```

- *Type:* *string

---

##### `ExternalNameInput`<sup>Optional</sup> <a name="ExternalNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalNameInput"></a>

```go
func ExternalNameInput() *string
```

- *Type:* *string

---

##### `FullDataTypeInput`<sup>Optional</sup> <a name="FullDataTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataTypeInput"></a>

```go
func FullDataTypeInput() *string
```

- *Type:* *string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullNameInput"></a>

```go
func FullNameInput() *string
```

- *Type:* *string

---

##### `FunctionIdInput`<sup>Optional</sup> <a name="FunctionIdInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionIdInput"></a>

```go
func FunctionIdInput() *string
```

- *Type:* *string

---

##### `InputParamsInput`<sup>Optional</sup> <a name="InputParamsInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParamsInput"></a>

```go
func InputParamsInput() interface{}
```

- *Type:* interface{}

---

##### `IsDeterministicInput`<sup>Optional</sup> <a name="IsDeterministicInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministicInput"></a>

```go
func IsDeterministicInput() interface{}
```

- *Type:* interface{}

---

##### `IsNullCallInput`<sup>Optional</sup> <a name="IsNullCallInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCallInput"></a>

```go
func IsNullCallInput() interface{}
```

- *Type:* interface{}

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreIdInput"></a>

```go
func MetastoreIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `ParameterStyleInput`<sup>Optional</sup> <a name="ParameterStyleInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyleInput"></a>

```go
func ParameterStyleInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.propertiesInput"></a>

```go
func PropertiesInput() *string
```

- *Type:* *string

---

##### `ReturnParamsInput`<sup>Optional</sup> <a name="ReturnParamsInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParamsInput"></a>

```go
func ReturnParamsInput() interface{}
```

- *Type:* interface{}

---

##### `RoutineBodyInput`<sup>Optional</sup> <a name="RoutineBodyInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBodyInput"></a>

```go
func RoutineBodyInput() *string
```

- *Type:* *string

---

##### `RoutineDefinitionInput`<sup>Optional</sup> <a name="RoutineDefinitionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinitionInput"></a>

```go
func RoutineDefinitionInput() *string
```

- *Type:* *string

---

##### `RoutineDependenciesInput`<sup>Optional</sup> <a name="RoutineDependenciesInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependenciesInput"></a>

```go
func RoutineDependenciesInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaNameInput"></a>

```go
func SchemaNameInput() *string
```

- *Type:* *string

---

##### `SecurityTypeInput`<sup>Optional</sup> <a name="SecurityTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityTypeInput"></a>

```go
func SecurityTypeInput() *string
```

- *Type:* *string

---

##### `SpecificNameInput`<sup>Optional</sup> <a name="SpecificNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificNameInput"></a>

```go
func SpecificNameInput() *string
```

- *Type:* *string

---

##### `SqlDataAccessInput`<sup>Optional</sup> <a name="SqlDataAccessInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccessInput"></a>

```go
func SqlDataAccessInput() *string
```

- *Type:* *string

---

##### `SqlPathInput`<sup>Optional</sup> <a name="SqlPathInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPathInput"></a>

```go
func SqlPathInput() *string
```

- *Type:* *string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAtInput"></a>

```go
func UpdatedAtInput() *f64
```

- *Type:* *f64

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedByInput"></a>

```go
func UpdatedByInput() *string
```

- *Type:* *string

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnly"></a>

```go
func BrowseOnly() interface{}
```

- *Type:* interface{}

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogName"></a>

```go
func CatalogName() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAt"></a>

```go
func CreatedAt() *f64
```

- *Type:* *f64

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `ExternalLanguage`<sup>Required</sup> <a name="ExternalLanguage" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguage"></a>

```go
func ExternalLanguage() *string
```

- *Type:* *string

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalName"></a>

```go
func ExternalName() *string
```

- *Type:* *string

---

##### `FullDataType`<sup>Required</sup> <a name="FullDataType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataType"></a>

```go
func FullDataType() *string
```

- *Type:* *string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullName"></a>

```go
func FullName() *string
```

- *Type:* *string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `IsDeterministic`<sup>Required</sup> <a name="IsDeterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministic"></a>

```go
func IsDeterministic() interface{}
```

- *Type:* interface{}

---

##### `IsNullCall`<sup>Required</sup> <a name="IsNullCall" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCall"></a>

```go
func IsNullCall() interface{}
```

- *Type:* interface{}

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ParameterStyle`<sup>Required</sup> <a name="ParameterStyle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyle"></a>

```go
func ParameterStyle() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.properties"></a>

```go
func Properties() *string
```

- *Type:* *string

---

##### `RoutineBody`<sup>Required</sup> <a name="RoutineBody" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBody"></a>

```go
func RoutineBody() *string
```

- *Type:* *string

---

##### `RoutineDefinition`<sup>Required</sup> <a name="RoutineDefinition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinition"></a>

```go
func RoutineDefinition() *string
```

- *Type:* *string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SecurityType`<sup>Required</sup> <a name="SecurityType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityType"></a>

```go
func SecurityType() *string
```

- *Type:* *string

---

##### `SpecificName`<sup>Required</sup> <a name="SpecificName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificName"></a>

```go
func SpecificName() *string
```

- *Type:* *string

---

##### `SqlDataAccess`<sup>Required</sup> <a name="SqlDataAccess" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccess"></a>

```go
func SqlDataAccess() *string
```

- *Type:* *string

---

##### `SqlPath`<sup>Required</sup> <a name="SqlPath" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPath"></a>

```go
func SqlPath() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *f64
```

- *Type:* *f64

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsReturnParamsList <a name="DataDatabricksFunctionsFunctionsReturnParamsList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsReturnParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFunctionsFunctionsReturnParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.get"></a>

```go
func Get(index *f64) DataDatabricksFunctionsFunctionsReturnParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsReturnParamsOutputReference <a name="DataDatabricksFunctionsFunctionsReturnParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsReturnParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFunctionsFunctionsReturnParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resetParameters"></a>

```go
func ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList">DataDatabricksFunctionsFunctionsReturnParamsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parameters"></a>

```go
func Parameters() DataDatabricksFunctionsFunctionsReturnParamsParametersList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList">DataDatabricksFunctionsFunctionsReturnParamsParametersList</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsReturnParamsParametersList <a name="DataDatabricksFunctionsFunctionsReturnParamsParametersList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsReturnParamsParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFunctionsFunctionsReturnParamsParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get"></a>

```go
func Get(index *f64) DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference <a name="DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterDefault">ResetParameterDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterMode">ResetParameterMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterType">ResetParameterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeIntervalType">ResetTypeIntervalType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeJson">ResetTypeJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypePrecision">ResetTypePrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeScale">ResetTypeScale</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetComment"></a>

```go
func ResetComment()
```

##### `ResetParameterDefault` <a name="ResetParameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterDefault"></a>

```go
func ResetParameterDefault()
```

##### `ResetParameterMode` <a name="ResetParameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterMode"></a>

```go
func ResetParameterMode()
```

##### `ResetParameterType` <a name="ResetParameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterType"></a>

```go
func ResetParameterType()
```

##### `ResetTypeIntervalType` <a name="ResetTypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeIntervalType"></a>

```go
func ResetTypeIntervalType()
```

##### `ResetTypeJson` <a name="ResetTypeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeJson"></a>

```go
func ResetTypeJson()
```

##### `ResetTypePrecision` <a name="ResetTypePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypePrecision"></a>

```go
func ResetTypePrecision()
```

##### `ResetTypeScale` <a name="ResetTypeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeScale"></a>

```go
func ResetTypeScale()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefaultInput">ParameterDefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterModeInput">ParameterModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterTypeInput">ParameterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.positionInput">PositionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalTypeInput">TypeIntervalTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJsonInput">TypeJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeNameInput">TypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecisionInput">TypePrecisionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScaleInput">TypeScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeTextInput">TypeTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefault">ParameterDefault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterMode">ParameterMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterType">ParameterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.position">Position</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalType">TypeIntervalType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJson">TypeJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeName">TypeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecision">TypePrecision</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScale">TypeScale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeText">TypeText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParameterDefaultInput`<sup>Optional</sup> <a name="ParameterDefaultInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefaultInput"></a>

```go
func ParameterDefaultInput() *string
```

- *Type:* *string

---

##### `ParameterModeInput`<sup>Optional</sup> <a name="ParameterModeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterModeInput"></a>

```go
func ParameterModeInput() *string
```

- *Type:* *string

---

##### `ParameterTypeInput`<sup>Optional</sup> <a name="ParameterTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterTypeInput"></a>

```go
func ParameterTypeInput() *string
```

- *Type:* *string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.positionInput"></a>

```go
func PositionInput() *f64
```

- *Type:* *f64

---

##### `TypeIntervalTypeInput`<sup>Optional</sup> <a name="TypeIntervalTypeInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalTypeInput"></a>

```go
func TypeIntervalTypeInput() *string
```

- *Type:* *string

---

##### `TypeJsonInput`<sup>Optional</sup> <a name="TypeJsonInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJsonInput"></a>

```go
func TypeJsonInput() *string
```

- *Type:* *string

---

##### `TypeNameInput`<sup>Optional</sup> <a name="TypeNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeNameInput"></a>

```go
func TypeNameInput() *string
```

- *Type:* *string

---

##### `TypePrecisionInput`<sup>Optional</sup> <a name="TypePrecisionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecisionInput"></a>

```go
func TypePrecisionInput() *f64
```

- *Type:* *f64

---

##### `TypeScaleInput`<sup>Optional</sup> <a name="TypeScaleInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScaleInput"></a>

```go
func TypeScaleInput() *f64
```

- *Type:* *f64

---

##### `TypeTextInput`<sup>Optional</sup> <a name="TypeTextInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeTextInput"></a>

```go
func TypeTextInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParameterDefault`<sup>Required</sup> <a name="ParameterDefault" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefault"></a>

```go
func ParameterDefault() *string
```

- *Type:* *string

---

##### `ParameterMode`<sup>Required</sup> <a name="ParameterMode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterMode"></a>

```go
func ParameterMode() *string
```

- *Type:* *string

---

##### `ParameterType`<sup>Required</sup> <a name="ParameterType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterType"></a>

```go
func ParameterType() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.position"></a>

```go
func Position() *f64
```

- *Type:* *f64

---

##### `TypeIntervalType`<sup>Required</sup> <a name="TypeIntervalType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalType"></a>

```go
func TypeIntervalType() *string
```

- *Type:* *string

---

##### `TypeJson`<sup>Required</sup> <a name="TypeJson" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJson"></a>

```go
func TypeJson() *string
```

- *Type:* *string

---

##### `TypeName`<sup>Required</sup> <a name="TypeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeName"></a>

```go
func TypeName() *string
```

- *Type:* *string

---

##### `TypePrecision`<sup>Required</sup> <a name="TypePrecision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecision"></a>

```go
func TypePrecision() *f64
```

- *Type:* *f64

---

##### `TypeScale`<sup>Required</sup> <a name="TypeScale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScale"></a>

```go
func TypeScale() *f64
```

- *Type:* *f64

---

##### `TypeText`<sup>Required</sup> <a name="TypeText" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeText"></a>

```go
func TypeText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.get"></a>

```go
func Get(index *f64) DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput">FunctionFullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullName">FunctionFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionFullNameInput`<sup>Optional</sup> <a name="FunctionFullNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput"></a>

```go
func FunctionFullNameInput() *string
```

- *Type:* *string

---

##### `FunctionFullName`<sup>Required</sup> <a name="FunctionFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullName"></a>

```go
func FunctionFullName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get"></a>

```go
func Get(index *f64) DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction">PutFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetTable">ResetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFunction` <a name="PutFunction" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction"></a>

```go
func PutFunction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable"></a>

```go
func PutTable(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFunction` <a name="ResetFunction" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetFunction"></a>

```go
func ResetFunction()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetTable"></a>

```go
func ResetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.function">Function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.functionInput">FunctionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.tableInput">TableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.function"></a>

```go
func Function() DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.table"></a>

```go
func Table() DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList</a>

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.functionInput"></a>

```go
func FunctionInput() interface{}
```

- *Type:* interface{}

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.tableInput"></a>

```go
func TableInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.get"></a>

```go
func Get(index *f64) DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullNameInput">TableFullNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullName">TableFullName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TableFullNameInput`<sup>Optional</sup> <a name="TableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullNameInput"></a>

```go
func TableFullNameInput() *string
```

- *Type:* *string

---

##### `TableFullName`<sup>Required</sup> <a name="TableFullName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullName"></a>

```go
func TableFullName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsRoutineDependenciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksFunctionsFunctionsRoutineDependenciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.get"></a>

```go
func Get(index *f64) DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/datadatabricksfunctions"

datadatabricksfunctions.NewDataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies">PutDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDependencies` <a name="PutDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies"></a>

```go
func PutDependencies(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resetDependencies"></a>

```go
func ResetDependencies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependencies"></a>

```go
func Dependencies() DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList</a>

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependenciesInput"></a>

```go
func DependenciesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



