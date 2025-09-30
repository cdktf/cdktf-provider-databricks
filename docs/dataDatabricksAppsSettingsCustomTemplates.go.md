# `dataDatabricksAppsSettingsCustomTemplates` Submodule <a name="`dataDatabricksAppsSettingsCustomTemplates` Submodule" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAppsSettingsCustomTemplates <a name="DataDatabricksAppsSettingsCustomTemplates" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates databricks_apps_settings_custom_templates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplates(scope Construct, id *string, config DataDatabricksAppsSettingsCustomTemplatesConfig) DataDatabricksAppsSettingsCustomTemplates
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig">DataDatabricksAppsSettingsCustomTemplatesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig">DataDatabricksAppsSettingsCustomTemplatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAppsSettingsCustomTemplates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplates_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplates_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplates_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplates_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksAppsSettingsCustomTemplates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksAppsSettingsCustomTemplates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksAppsSettingsCustomTemplates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAppsSettingsCustomTemplates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.templates">Templates</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList">DataDatabricksAppsSettingsCustomTemplatesTemplatesList</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Templates`<sup>Required</sup> <a name="Templates" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.templates"></a>

```go
func Templates() DataDatabricksAppsSettingsCustomTemplatesTemplatesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList">DataDatabricksAppsSettingsCustomTemplatesTemplatesList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplates.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAppsSettingsCustomTemplatesConfig <a name="DataDatabricksAppsSettingsCustomTemplatesConfig" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

&datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplatesConfig {
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

### DataDatabricksAppsSettingsCustomTemplatesTemplates <a name="DataDatabricksAppsSettingsCustomTemplatesTemplates" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

&datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates {
	GitProvider: *string,
	GitRepo: *string,
	Manifest: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest,
	Name: *string,
	Path: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.gitProvider">GitProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#git_provider DataDatabricksAppsSettingsCustomTemplates#git_provider}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.gitRepo">GitRepo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#git_repo DataDatabricksAppsSettingsCustomTemplates#git_repo}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#manifest DataDatabricksAppsSettingsCustomTemplates#manifest}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#path DataDatabricksAppsSettingsCustomTemplates#path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}. |

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.gitProvider"></a>

```go
GitProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#git_provider DataDatabricksAppsSettingsCustomTemplates#git_provider}.

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.gitRepo"></a>

```go
GitRepo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#git_repo DataDatabricksAppsSettingsCustomTemplates#git_repo}.

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.manifest"></a>

```go
Manifest DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#manifest DataDatabricksAppsSettingsCustomTemplates#manifest}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#path DataDatabricksAppsSettingsCustomTemplates#path}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

&datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest {
	Name: *string,
	Version: *f64,
	Description: *string,
	ResourceSpecs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.version">Version</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#version DataDatabricksAppsSettingsCustomTemplates#version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.resourceSpecs">ResourceSpecs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#resource_specs DataDatabricksAppsSettingsCustomTemplates#resource_specs}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#version DataDatabricksAppsSettingsCustomTemplates#version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}.

---

##### `ResourceSpecs`<sup>Optional</sup> <a name="ResourceSpecs" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest.property.resourceSpecs"></a>

```go
ResourceSpecs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#resource_specs DataDatabricksAppsSettingsCustomTemplates#resource_specs}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

&datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs {
	Name: *string,
	Description: *string,
	JobSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec,
	SecretSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec,
	ServingEndpointSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec,
	SqlWarehouseSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec,
	UcSecurableSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#job_spec DataDatabricksAppsSettingsCustomTemplates#job_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#secret_spec DataDatabricksAppsSettingsCustomTemplates#secret_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplates#serving_endpoint_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplates#sql_warehouse_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#uc_securable_spec DataDatabricksAppsSettingsCustomTemplates#uc_securable_spec}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#name DataDatabricksAppsSettingsCustomTemplates#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#description DataDatabricksAppsSettingsCustomTemplates#description}.

---

##### `JobSpec`<sup>Optional</sup> <a name="JobSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.jobSpec"></a>

```go
JobSpec DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#job_spec DataDatabricksAppsSettingsCustomTemplates#job_spec}.

---

##### `SecretSpec`<sup>Optional</sup> <a name="SecretSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.secretSpec"></a>

```go
SecretSpec DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#secret_spec DataDatabricksAppsSettingsCustomTemplates#secret_spec}.

---

##### `ServingEndpointSpec`<sup>Optional</sup> <a name="ServingEndpointSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.servingEndpointSpec"></a>

```go
ServingEndpointSpec DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#serving_endpoint_spec DataDatabricksAppsSettingsCustomTemplates#serving_endpoint_spec}.

---

##### `SqlWarehouseSpec`<sup>Optional</sup> <a name="SqlWarehouseSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.sqlWarehouseSpec"></a>

```go
SqlWarehouseSpec DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#sql_warehouse_spec DataDatabricksAppsSettingsCustomTemplates#sql_warehouse_spec}.

---

##### `UcSecurableSpec`<sup>Optional</sup> <a name="UcSecurableSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecs.property.ucSecurableSpec"></a>

```go
UcSecurableSpec DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#uc_securable_spec DataDatabricksAppsSettingsCustomTemplates#uc_securable_spec}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

&datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

&datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

&datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

&datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

&datadatabricksappssettingscustomtemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec {
	Permission: *string,
	SecurableType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec.property.securableType">SecurableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#securable_type DataDatabricksAppsSettingsCustomTemplates#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#permission DataDatabricksAppsSettingsCustomTemplates#permission}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec.property.securableType"></a>

```go
SecurableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/apps_settings_custom_templates#securable_type DataDatabricksAppsSettingsCustomTemplates#securable_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAppsSettingsCustomTemplatesTemplatesList <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesList" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplatesTemplatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAppsSettingsCustomTemplatesTemplatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.get"></a>

```go
func Get(index *f64) DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.putResourceSpecs">PutResourceSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resetResourceSpecs">ResetResourceSpecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceSpecs` <a name="PutResourceSpecs" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.putResourceSpecs"></a>

```go
func PutResourceSpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.putResourceSpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetResourceSpecs` <a name="ResetResourceSpecs" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.resetResourceSpecs"></a>

```go
func ResetResourceSpecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.resourceSpecs">ResourceSpecs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.resourceSpecsInput">ResourceSpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceSpecs`<sup>Required</sup> <a name="ResourceSpecs" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.resourceSpecs"></a>

```go
func ResourceSpecs() DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceSpecsInput`<sup>Optional</sup> <a name="ResourceSpecsInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.resourceSpecsInput"></a>

```go
func ResourceSpecsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest</a>

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.get"></a>

```go
func Get(index *f64) DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putJobSpec">PutJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSecretSpec">PutSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putServingEndpointSpec">PutServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSqlWarehouseSpec">PutSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putUcSecurableSpec">PutUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetJobSpec">ResetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetSecretSpec">ResetSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetServingEndpointSpec">ResetServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetSqlWarehouseSpec">ResetSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetUcSecurableSpec">ResetUcSecurableSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobSpec` <a name="PutJobSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putJobSpec"></a>

```go
func PutJobSpec(value DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpec</a>

---

##### `PutSecretSpec` <a name="PutSecretSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSecretSpec"></a>

```go
func PutSecretSpec(value DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSecretSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpec</a>

---

##### `PutServingEndpointSpec` <a name="PutServingEndpointSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putServingEndpointSpec"></a>

```go
func PutServingEndpointSpec(value DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putServingEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpec</a>

---

##### `PutSqlWarehouseSpec` <a name="PutSqlWarehouseSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSqlWarehouseSpec"></a>

```go
func PutSqlWarehouseSpec(value DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putSqlWarehouseSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `PutUcSecurableSpec` <a name="PutUcSecurableSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putUcSecurableSpec"></a>

```go
func PutUcSecurableSpec(value DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.putUcSecurableSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetJobSpec` <a name="ResetJobSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetJobSpec"></a>

```go
func ResetJobSpec()
```

##### `ResetSecretSpec` <a name="ResetSecretSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetSecretSpec"></a>

```go
func ResetSecretSpec()
```

##### `ResetServingEndpointSpec` <a name="ResetServingEndpointSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetServingEndpointSpec"></a>

```go
func ResetServingEndpointSpec()
```

##### `ResetSqlWarehouseSpec` <a name="ResetSqlWarehouseSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetSqlWarehouseSpec"></a>

```go
func ResetSqlWarehouseSpec()
```

##### `ResetUcSecurableSpec` <a name="ResetUcSecurableSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.resetUcSecurableSpec"></a>

```go
func ResetUcSecurableSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.jobSpecInput">JobSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.secretSpecInput">SecretSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.servingEndpointSpecInput">ServingEndpointSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput">SqlWarehouseSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.ucSecurableSpecInput">UcSecurableSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.jobSpec"></a>

```go
func JobSpec() DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsJobSpecOutputReference</a>

---

##### `SecretSpec`<sup>Required</sup> <a name="SecretSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.secretSpec"></a>

```go
func SecretSpec() DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference</a>

---

##### `ServingEndpointSpec`<sup>Required</sup> <a name="ServingEndpointSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.servingEndpointSpec"></a>

```go
func ServingEndpointSpec() DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference</a>

---

##### `SqlWarehouseSpec`<sup>Required</sup> <a name="SqlWarehouseSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.sqlWarehouseSpec"></a>

```go
func SqlWarehouseSpec() DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference</a>

---

##### `UcSecurableSpec`<sup>Required</sup> <a name="UcSecurableSpec" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.ucSecurableSpec"></a>

```go
func UcSecurableSpec() DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `JobSpecInput`<sup>Optional</sup> <a name="JobSpecInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.jobSpecInput"></a>

```go
func JobSpecInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretSpecInput`<sup>Optional</sup> <a name="SecretSpecInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.secretSpecInput"></a>

```go
func SecretSpecInput() interface{}
```

- *Type:* interface{}

---

##### `ServingEndpointSpecInput`<sup>Optional</sup> <a name="ServingEndpointSpecInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.servingEndpointSpecInput"></a>

```go
func ServingEndpointSpecInput() interface{}
```

- *Type:* interface{}

---

##### `SqlWarehouseSpecInput`<sup>Optional</sup> <a name="SqlWarehouseSpecInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput"></a>

```go
func SqlWarehouseSpecInput() interface{}
```

- *Type:* interface{}

---

##### `UcSecurableSpecInput`<sup>Optional</sup> <a name="UcSecurableSpecInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.ucSecurableSpecInput"></a>

```go
func UcSecurableSpecInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSecretSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType">SecurableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput"></a>

```go
func SecurableTypeInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType"></a>

```go
func SecurableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference <a name="DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/datadatabricksappssettingscustomtemplates"

datadatabricksappssettingscustomtemplates.NewDataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.putManifest">PutManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManifest` <a name="PutManifest" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.putManifest"></a>

```go
func PutManifest(value DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitProviderInput">GitProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitRepoInput">GitRepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.manifestInput">ManifestInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitProvider">GitProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitRepo">GitRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates">DataDatabricksAppsSettingsCustomTemplatesTemplates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.manifest"></a>

```go
func Manifest() DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifestOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GitProviderInput`<sup>Optional</sup> <a name="GitProviderInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitProviderInput"></a>

```go
func GitProviderInput() *string
```

- *Type:* *string

---

##### `GitRepoInput`<sup>Optional</sup> <a name="GitRepoInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitRepoInput"></a>

```go
func GitRepoInput() *string
```

- *Type:* *string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.manifestInput"></a>

```go
func ManifestInput() DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest">DataDatabricksAppsSettingsCustomTemplatesTemplatesManifest</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitProvider"></a>

```go
func GitProvider() *string
```

- *Type:* *string

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.gitRepo"></a>

```go
func GitRepo() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplatesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataDatabricksAppsSettingsCustomTemplatesTemplates
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAppsSettingsCustomTemplates.DataDatabricksAppsSettingsCustomTemplatesTemplates">DataDatabricksAppsSettingsCustomTemplatesTemplates</a>

---



